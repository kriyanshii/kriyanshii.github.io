# Understanding Partial Success in DAG Systems: Building Resilient Workflows

## Introduction

In the world of workflow orchestration, not all failures are created equal. Sometimes, a workflow can achieve its primary objectives even when some non-critical steps fail. This is where **partial success** becomes a powerful concept for building resilient, fault-tolerant systems.

Partial success represents a nuanced execution state where a DAG (Directed Acyclic Graph) completes its primary objectives despite encountering some failures that were explicitly allowed to continue. Unlike traditional binary success/failure states, partial success acknowledges that modern workflows often have optional components, fallback mechanisms, and non-critical operations that shouldn't halt the entire process.

## What is Partial Success?

Partial success is a DAG execution status that indicates:

- **Primary objectives were achieved**: The core business logic completed successfully
- **Some non-critical failures occurred**: Certain steps failed but were configured to continue
- **Workflow completed gracefully**: The DAG reached a terminal state without being aborted

This concept is particularly valuable in scenarios where:

- Optional cleanup tasks fail but don't affect the main process
- Non-critical monitoring or logging steps encounter issues
- Fallback mechanisms are in place for known failure scenarios
- Multi-cloud or multi-region deployments where some regions may be unavailable

## How Partial Success Works in DAG Systems

### The Implementation Logic

Based on the DAG scheduler implementation, partial success is determined through a sophisticated two-pass algorithm:

```go
// First pass: Check if any failed node is NOT allowed to continue
for _, node := range g.nodes {
    if node.State().Status == status.NodeError {
        if !node.ShouldContinue(ctx) {
            // Found a failed node that was NOT allowed to continue
            // This disqualifies the DAG from being partial success
            return false
        }
    }
}

// Second pass: Check for partial success conditions
for _, node := range g.nodes {
    switch node.State().Status {
    case status.NodeSuccess:
        hasSuccessfulNodes = true
    case status.NodeError:
        if node.ShouldContinue(ctx) && !node.ShouldMarkSuccess(ctx) {
            hasFailuresWithContinueOn = true
        }
    case status.NodePartialSuccess:
        hasFailuresWithContinueOn = true
        hasSuccessfulNodes = true
    }
}

// Partial success requires:
// 1. At least one failed node with continueOn (some non-critical failures)
// 2. No failed nodes without continueOn (checked in first pass)
return hasSuccessfulNodes && hasFailuresWithContinueOn
```

### Key Requirements for Partial Success

For a DAG to achieve partial success status, it must meet these criteria:

1. **At least one successful node**: The workflow must have completed some primary work
2. **At least one failed node with `continueOn`**: Some non-critical failures occurred but were allowed to continue
3. **No critical failures**: No failed nodes without `continueOn` configuration
4. **Graceful completion**: The DAG reached a terminal state without being aborted

### Status Hierarchy and Event Handlers

Partial success is treated as a success state for event handling purposes:

```go
switch sc.Status(ctx, graph) {
case status.Success:
    eventHandlers = append(eventHandlers, digraph.HandlerOnSuccess)

case status.PartialSuccess:
    // PartialSuccess is treated as success since primary work was completed
    // despite some non-critical failures that were allowed to continue
    eventHandlers = append(eventHandlers, digraph.HandlerOnSuccess)

case status.Error:
    eventHandlers = append(eventHandlers, digraph.HandlerOnFailure)
}
```

This means that `onSuccess` handlers will execute for both full success and partial success, while `onFailure` handlers only run for true failures.

## Real-World Use Cases

### 1. Multi-Cloud Deployment Strategy

```yaml
steps:
  - name: deploy-aws
    command: aws-deploy.sh
    continueOn:
      failure: true # Continue even if AWS deployment fails

  - name: deploy-gcp
    command: gcp-deploy.sh
    continueOn:
      failure: true # Continue even if GCP deployment fails

  - name: verify-deployment
    command: verify-deployment.sh
    # This step must succeed - no continueOn
```

**Scenario**: Deploy to multiple cloud providers for redundancy. If AWS fails but GCP succeeds, the deployment is still considered successful.

**Partial Success Outcome**: The workflow completes with partial success, indicating that at least one cloud deployment succeeded while the other failed but was allowed to continue.

### 2. Data Pipeline with Optional Enhancements

```yaml
steps:
  - name: extract-data
    command: extract-from-source.sh

  - name: transform-data
    command: transform-data.sh
    depends: [extract-data]

  - name: load-data
    command: load-to-warehouse.sh
    depends: [transform-data]

  - name: generate-analytics
    command: generate-analytics.sh
    depends: [load-data]
    continueOn:
      failure: true # Analytics are nice-to-have

  - name: send-notifications
    command: send-notifications.sh
    depends: [load-data]
    continueOn:
      failure: true # Notifications are optional
```

**Scenario**: A data pipeline where the core ETL process (extract, transform, load) is critical, but analytics generation and notifications are optional enhancements.

**Partial Success Outcome**: If analytics generation fails but the core data pipeline succeeds, the workflow achieves partial success.

### 3. Service Health Monitoring with Fallbacks

```yaml
steps:
  - name: check-primary-service
    command: curl -f https://primary.example.com/health
    continueOn:
      exitCode: [0, 22, 7] # 22=HTTP error, 7=connection failed

  - name: check-secondary-service
    command: curl -f https://secondary.example.com/health
    preconditions:
      - condition: "${CHECK_PRIMARY_SERVICE_EXIT_CODE}"
        expected: "re:[1-9][0-9]*" # Only if primary failed
    continueOn:
      exitCode: [0, 22, 7]

  - name: alert-oncall
    command: alert-oncall.sh
    continueOn:
      failure: true # Alerting failure shouldn't stop monitoring
```

**Scenario**: Monitor multiple service instances with fallback mechanisms. If the primary service is down but the secondary is healthy, the monitoring workflow should continue.

**Partial Success Outcome**: The workflow completes with partial success if the secondary service is healthy, even if the primary service check failed.

### 4. Database Migration with Known Warnings

```yaml
steps:
  - name: run-migration
    command: migrate-database.sh
    continueOn:
      output:
        - "re:WARNING:.*already exists"
        - "re:NOTICE:.*will be created"
      exitCode: [0, 1] # 1 might indicate warnings

  - name: verify-migration
    command: verify-database.sh
    depends: [run-migration]

  - name: update-schema-version
    command: update-schema-version.sh
    depends: [verify-migration]
```

**Scenario**: Database migrations often produce warnings for existing objects or notices for new objects. These are expected and shouldn't fail the migration.

**Partial Success Outcome**: The migration completes successfully even if it produces expected warnings, resulting in partial success status.

### 5. Cleanup and Maintenance Tasks

```yaml
steps:
  - name: process-main-task
    command: process-data.sh

  - name: cleanup-temp-files
    command: rm -rf /tmp/processing-*
    continueOn:
      failure: true # Cleanup failure shouldn't affect main task

  - name: archive-logs
    command: archive-logs.sh
    continueOn:
      failure: true # Archiving is optional

  - name: send-completion-notification
    command: send-notification.sh
    continueOn:
      failure: true # Notification failure is non-critical
```

**Scenario**: A main processing task followed by optional cleanup and notification steps. The core business logic is the main task, while cleanup and notifications are nice-to-have.

**Partial Success Outcome**: If the main task succeeds but cleanup or notifications fail, the workflow achieves partial success.

## Best Practices for Partial Success

### 1. Clear Intent and Documentation

Always document why certain steps are configured with `continueOn`:

```yaml
steps:
  - name: optional-cache-warmup
    command: warmup-cache.sh
    continueOn:
      failure: true
    # This step is optional - cache warmup failure doesn't affect core functionality
```

### 2. Use `markSuccess` Judiciously

The `markSuccess` flag should be used carefully as it changes how dependent steps perceive the step's status:

```yaml
steps:
  - name: step-a
    command: exit 1
    continueOn:
      failure: true
      markSuccess: false  # Default - dependent steps see it as failed

  - name: step-b
    command: echo "Step A status: failed"
    depends: [step-a]  # Runs because of continueOn

  - name: step-c
    command: exit 1
    continueOn:
      failure: true
      markSuccess: true  # Override status

  - name: step-d
    command: echo "Step C status: success"
    depends: [step-c]  # Sees step-c as successful
```

### 3. Combine with Retry Policies

Use retry policies before falling back to `continueOn`:

```yaml
steps:
  - name: flaky-service
    command: call-service.sh
    retryPolicy:
      limit: 3
      intervalSec: 5
    continueOn:
      exitCode: [503] # Continue if still 503 after retries
```

### 4. Monitor Partial Success Rates

Track partial success rates to identify patterns:

```yaml
handlerOn:
  success:
    command: |
      if [ "${DAG_STATUS}" = "partial success" ]; then
        echo "Workflow completed with partial success - some non-critical steps failed"
        # Log to monitoring system
      fi
```

### 5. Use Specific Exit Codes and Output Patterns

Be specific about which failures should continue:

```yaml
steps:
  - name: security-scan
    command: security-scanner.sh
    continueOn:
      exitCode: [0, 4, 8] # 0=clean, 4=warnings, 8=info
      output:
        - "re:LOW SEVERITY:"
        - "re:INFORMATIONAL:"
```

## Benefits of Partial Success

### 1. Improved Resilience

Partial success allows workflows to be more resilient to non-critical failures, reducing the need for manual intervention and retries.

### 2. Better Resource Utilization

Instead of failing entire workflows due to optional step failures, partial success enables better resource utilization by completing the core work.

### 3. Clearer Status Reporting

Partial success provides a more nuanced status that distinguishes between critical failures and non-critical issues, enabling better monitoring and alerting.

### 4. Graceful Degradation

Workflows can degrade gracefully, providing reduced functionality rather than complete failure when some components are unavailable.

### 5. Reduced False Alerts

By distinguishing between critical and non-critical failures, partial success reduces false alerts and improves signal-to-noise ratio in monitoring systems.

## Conclusion

Partial success is a powerful concept that enables the creation of resilient, fault-tolerant workflows. By allowing non-critical steps to fail while still considering the overall workflow successful, DAG systems can better handle the complexities of modern distributed systems.

The key to effective use of partial success lies in:

- **Clear identification** of which steps are critical vs. optional
- **Proper configuration** of `continueOn` conditions
- **Thoughtful use** of `markSuccess` flags
- **Comprehensive monitoring** of partial success rates
- **Good documentation** of the intended behavior

When implemented correctly, partial success transforms workflows from brittle, all-or-nothing processes into robust, adaptive systems that can handle real-world complexities while still achieving their primary objectives.

This approach is particularly valuable in scenarios involving:

- Multi-cloud deployments
- Data pipelines with optional enhancements
- Service monitoring with fallbacks
- Database operations with expected warnings
- Cleanup and maintenance tasks

By embracing partial success, organizations can build more reliable, maintainable, and resilient workflow systems that better reflect the reality of distributed computing environments.
