---
title: Using SSH Executor in Dagu
date: 2025-11-02
tag: Tech
description: A Complete Guide
---

# Using SSH Executor in Dagu

Dagu is a powerful workflow engine that allows you to execute commands on remote servers using SSH. This capability is essential for tasks like remote deployments, server management, database backups, and distributed computing. In this comprehensive guide, we'll explore how to leverage Dagu's SSH executor to run commands securely on remote hosts.

> **Note**: This guide is based on the current version of Dagu as of the latest release. Features and syntax may have evolved since earlier versions.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Understanding SSH Executor](#understanding-ssh-executor)
3. [Basic SSH Configuration](#basic-ssh-configuration)
4. [DAG-Level vs Step-Level Configuration](#dag-level-vs-step-level-configuration)
5. [Authentication Methods](#authentication-methods)
6. [Real-World Examples](#real-world-examples)
7. [Security Best Practices](#security-best-practices)
8. [Common Patterns](#common-patterns)
9. [Troubleshooting](#troubleshooting)

## Prerequisites

Before diving into SSH execution, ensure you have:

- **Dagu Installed**: If you haven't installed Dagu yet, follow the [official installation guide](https://docs.dagu.cloud/getting-started/installation).
- **SSH Access**: Valid SSH access to remote servers with appropriate credentials.
- **SSH Keys**: A properly configured SSH key pair (recommended) or password authentication.

## Understanding SSH Executor

The SSH executor in Dagu allows you to execute commands on remote machines over SSH connections. It provides a seamless way to integrate remote operations into your workflows without leaving your local Dagu instance.

### How It Works

1. Dagu establishes an SSH connection to the remote host using the provided credentials
2. Commands are executed in a dedicated SSH session
3. Output (stdout/stderr) is captured and streamed back
4. The session is automatically cleaned up after command completion

## Basic SSH Configuration

At its simplest, SSH execution in Dagu requires just two fields: `user` and `host`. All other settings have sensible defaults.

```yaml
ssh:
  user: deploy
  host: server.example.com

steps:
  - echo "Hello from remote server"
```

This configuration will:
- Connect to `server.example.com` as user `deploy`
- Use port 22 (default SSH port)
- Try standard SSH keys from `~/.ssh/id_rsa`, `~/.ssh/id_ecdsa`, `~/.ssh/id_ed25519`, or `~/.ssh/id_dsa`

### Complete Configuration Example

Here's a full SSH configuration with all available options:

```yaml
ssh:
  user: deploy                    # SSH username (required)
  host: server.example.com        # Hostname or IP (required)
  port: 2222                      # SSH port (default: 22)
  key: ~/.ssh/custom_deploy_key   # Path to private key (optional)
  password: mySecurePass          # Password (optional, not recommended)
  strictHostKey: true             # Host key verification (default: true)
  knownHostFile: ~/.ssh/known_hosts  # Known hosts file (default: ~/.ssh/known_hosts)

steps:
  - echo "Running on remote server"
```

### Configuration Options Explained

| Field | Required | Default | Description |
|-------|----------|---------|-------------|
| `user` | Yes | - | SSH username for authentication |
| `host` or `ip` | Yes | - | Hostname or IP address of the remote server (both field names are supported) |
| `port` | No | `22` | SSH port number |
| `key` | No | Auto-detect | Path to SSH private key file |
| `password` | No | - | SSH password (key-based auth is recommended) |
| `strictHostKey` | No | `true` | Enable strict host key checking |
| `knownHostFile` | No | `~/.ssh/known_hosts` | Path to known_hosts file |



## DAG-Level vs Step-Level Configuration

Dagu provides flexibility in configuring SSH settings. You can define SSH configuration at two levels:

### 1. DAG-Level Configuration (Shared)

When you define SSH configuration at the DAG level, all steps inherit the same connection. This is perfect when all steps run on the same server.

```yaml
# All steps will execute on the same remote server
ssh:
  user: deploy
  host: production.server.com
  key: ~/.ssh/production_key

steps:
  - name: backup-database
    command: pg_dump mydb > backup.sql
  
  - name: deploy-application
    command: |
      git pull origin main
      sudo systemctl restart myapp
  
  - name: verify-deployment
    command: curl http://localhost:8080/health
```

### 2. Step-Level Configuration (Individual)

You can override SSH configuration for specific steps when you need to connect to different servers within the same workflow.

```yaml
# Default configuration for most steps
ssh:
  user: deploy
  host: app-server.com
  key: ~/.ssh/app_key

steps:
  # Uses DAG-level configuration
  - name: deploy-app
    command: ./deploy.sh
  
  # Overrides SSH for this specific step
  - name: sync-backup
    command: rsync -av /backup backup-server:/archive/
    executor:
      type: ssh
      config:
        user: backup-admin
        ip: backup-server.com  # 'ip' or 'host' both work
        port: 2222
        key: ~/.ssh/backup_key
  
  # Back to using DAG-level configuration
  - name: send-notification
    command: curl -X POST http://webhook.example.com/notify
```

### Inheritance Pattern

The SSH executor follows this priority order:

1. **Step-level executor config** (highest priority)
2. **DAG-level SSH configuration** (fallback)
3. **Error if neither is configured**

```yaml
ssh:
  user: common-user
  host: common-host.com
  key: ~/.ssh/common_key

steps:
  - name: step1
    # Uses DAG-level: common-user@common-host.com
    command: echo "Step 1"
  
  - name: step2
    # Uses step-level override: special-user@special-host.com
    executor:
      type: ssh
      config:
        user: special-user
        host: special-host.com
        key: ~/.ssh/special_key
    command: echo "Step 2"
```

## Authentication Methods

Dagu supports multiple authentication methods for SSH connections.

### 1. Key-Based Authentication (Recommended)

Key-based authentication is the most secure and recommended method.

```yaml
ssh:
  user: deploy
  host: server.example.com
  key: ~/.ssh/id_rsa

steps:
  - command: echo "Authenticated with key"
```

#### Auto-Detection

If you don't specify a key, Dagu will automatically try these locations in order:

1. `~/.ssh/id_rsa`
2. `~/.ssh/id_ecdsa`
3. `~/.ssh/id_ed25519`
4. `~/.ssh/id_dsa`

```yaml
# This will automatically use one of the default keys if available
ssh:
  user: deploy
  host: server.example.com
  # No key specified - uses auto-detection

steps:
  - command: echo "Using auto-detected key"
```

### 2. Password Authentication

Password authentication is supported but not recommended for security reasons.

```yaml
ssh:
  user: deploy
  host: server.example.com
  password: mySecurePassword

steps:
  - command: echo "Authenticated with password"
```

**⚠️ Security Warning**: Passwords in YAML files are visible in plain text. Consider using environment variables for sensitive credentials.

#### Using Environment Variables

```yaml
ssh:
  user: deploy
  host: server.example.com
  password: ${SSH_PASSWORD}

steps:
  - command: echo "Using password from environment"
```

Then set the environment variable:

```bash
export SSH_PASSWORD="your-secure-password"
dagu start my-workflow.yaml
```

### 3. Mixed Authentication

You can also use a specific key with an optional passphrase (handled by SSH agent):

```yaml
ssh:
  user: deploy
  host: server.example.com
  key: ~/.ssh/encrypted_key

steps:
  - command: echo "Using key with passphrase"
```

Make sure your SSH agent is running if using encrypted keys:

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/encrypted_key
```

## Real-World Examples

### Example 1: Database Backup and Archive

Automate database backups with remote storage archival.

```yaml
name: Database Backup Workflow
schedule: "0 2 * * *"  # Daily at 2 AM

ssh:
  user: db-admin
  host: db-server.production.com
  key: ~/.ssh/db_key
  strictHostKey: true

steps:
  - name: create-backup
    command: |
      pg_dump -U postgres production_db | gzip > /backups/prod_$(date +%Y%m%d).sql.gz
  
  - name: transfer-to-archive
    command: |
      aws s3 cp /backups/prod_$(date +%Y%m%d).sql.gz \
        s3://backup-archive/production/
  
  - name: cleanup-old-backups
    command: |
      find /backups -name "prod_*.sql.gz" -mtime +30 -delete
      echo "Old backups cleaned up"
```

### Example 2: Multi-Server Deployment

Deploy to multiple servers with verification.

```yaml
name: Multi-Stack Deployment

# Primary application server
ssh:
  user: deploy
  host: app.production.com
  key: ~/.ssh/production_key

steps:
  - name: deploy-frontend
    command: |
      cd /var/www/frontend
      git pull origin main
      npm run build
      sudo systemctl restart nginx
  
  - name: deploy-backend
    # Can also use backend.server.com with same credentials
    command: |
      cd /var/www/backend
      git pull origin main
      docker-compose up -d --build
  
  - name: update-database
    # Different server, different configuration
    executor:
      type: ssh
      config:
        user: db-admin
        host: db.production.com
        key: ~/.ssh/db_admin_key
    command: |
      psql -U postgres -d production << EOF
        \i /opt/migrations/latest.sql
        SELECT 'Migration complete';
      EOF
  
  - name: health-check
    # Back to primary server
    command: |
      curl -f http://localhost:8080/health || exit 1
      echo "All services healthy"
```

### Example 3: Parallel Remote Operations

Execute operations in parallel across multiple servers.

```yaml
name: Parallel Server Maintenance

steps:
  - name: maintenance-start
    command: echo "Starting maintenance across all servers"
  
  - name: update-app-server-1
    executor:
      type: ssh
      config:
        user: admin
        host: app1.example.com
        key: ~/.ssh/admin_key
    command: |
      sudo apt update && sudo apt upgrade -y
      sudo systemctl restart app
  
  - name: update-app-server-2
    executor:
      type: ssh
      config:
        user: admin
        host: app2.example.com
        key: ~/.ssh/admin_key
    command: |
      sudo apt update && sudo apt upgrade -y
      sudo systemctl restart app
  
  - name: update-app-server-3
    executor:
      type: ssh
      config:
        user: admin
        host: app3.example.com
        key: ~/.ssh/admin_key
    command: |
      sudo apt update && sudo apt upgrade -y
      sudo systemctl restart app
  
  # These three steps run in parallel
  - name: verify-services
    command: echo "All maintenance complete"
    depends:
      - update-app-server-1
      - update-app-server-2
      - update-app-server-3
```

### Example 4: CI/CD Integration

Integrate SSH execution into your CI/CD pipeline.

```yaml
name: Deploy to Staging

env:
  - APP_VERSION: ${version}

ssh:
  user: ${SSH_USER}
  host: ${SSH_HOST}
  key: ${SSH_KEY_PATH}
  strictHostKey: false  # For dynamic/test environments

steps:
  - name: pull-latest-code
    command: |
      cd /opt/myapp
      git fetch origin
      git checkout ${APP_VERSION}
  
  - name: build-and-deploy
    command: |
      docker-compose down
      docker-compose build
      docker-compose up -d
  
  - name: run-migrations
    command: |
      docker-compose exec -T app npm run migrate
  
  - name: run-tests
    command: |
      docker-compose exec -T app npm test
  
  - name: notify-success
    command: |
      curl -X POST https://hooks.slack.com/services/YOUR/WEBHOOK/URL \
        -d '{"text":"Deployment successful!"}'
  
  onExit:
    - name: notify-failure
      if: ${DAGU_ERR}
      command: |
        curl -X POST https://hooks.slack.com/services/YOUR/WEBHOOK/URL \
          -d '{"text":"Deployment failed: ${DAGU_ERR}"}'
```

### Example 5: Data Processing Pipeline

Move and process data across servers.

```yaml
name: Data Processing Pipeline

steps:
  - name: collect-logs
    executor:
      type: ssh
      config:
        user: logger
        host: log-collector.com
        key: ~/.ssh/logger_key
    command: |
      tar -czf /tmp/logs_$(date +%Y%m%d).tar.gz /var/log/app
      mv /tmp/logs_*.tar.gz /shared/logs/
  
  - name: process-logs
    executor:
      type: ssh
      config:
        user: processor
        host: analytics-server.com
        key: ~/.ssh/processor_key
    command: |
      cd /opt/analytics
      ./process_logs.sh /shared/logs/*.tar.gz
      python3 generate_report.py
  
  - name: archive-results
    executor:
      type: ssh
      config:
        user: archiver
        host: storage-server.com
        key: ~/.ssh/storage_key
    command: |
      aws s3 sync /opt/analytics/reports/ \
        s3://analytics-archive/$(date +%Y)/$(date +%m)/
```

## Security Best Practices

### 1. Use Key-Based Authentication

Always prefer SSH keys over passwords:

```yaml
# Good ✅
ssh:
  user: deploy
  host: server.example.com
  key: ~/.ssh/id_rsa

# Avoid ❌
ssh:
  user: deploy
  host: server.example.com
  password: plaintext-password
```

### 2. Enable Host Key Verification

Keep strict host key checking enabled (it's the default):

```yaml
# Good ✅ - Default behavior
ssh:
  user: deploy
  host: server.example.com
  strictHostKey: true  # Explicit for clarity

# Only for development/testing ❌
ssh:
  user: deploy
  host: test-server.local
  strictHostKey: false
```

### 3. Use Environment Variables for Secrets

Never hardcode credentials in YAML files:

```yaml
# Good ✅
ssh:
  user: ${SSH_USER}
  host: ${SSH_HOST}
  key: ${SSH_KEY_PATH}

# Bad ❌
ssh:
  user: myusername
  host: myserver.com
  password: mypassword123
```

### 4. Restrict SSH Key Permissions

Ensure your SSH private keys have correct permissions:

```bash
chmod 600 ~/.ssh/id_rsa
chmod 644 ~/.ssh/id_rsa.pub
```

### 5. Use Dedicated Deployment Keys

Create separate SSH keys for deployments:

```bash
ssh-keygen -t ed25519 -f ~/.ssh/deploy_key -C "dagu-deployment"
```

Then reference them in your workflows:

```yaml
ssh:
  user: deploy
  host: production.com
  key: ~/.ssh/deploy_key
```

### 6. Rotate Keys Regularly

Periodically rotate SSH keys and update configurations:

```yaml
# Version your keys
ssh:
  user: deploy
  host: production.com
  key: ~/.ssh/deploy_key_v2
```

### 7. Use SSH Config for Consistency

Create an SSH config file for reusable configurations:

```bash
# ~/.ssh/config
Host production
  HostName production.example.com
  User deploy
  IdentityFile ~/.ssh/deploy_key
  Port 2222

Host staging
  HostName staging.example.com
  User deploy
  IdentityFile ~/.ssh/deploy_key
```

Then reference in Dagu (if your SSH client supports it):

```yaml
# Note: Dagu uses direct SSH connections, 
# but you can still reference the host alias
ssh:
  user: deploy
  host: production
  key: ~/.ssh/deploy_key
```

## Common Patterns

### Pattern 1: Fail-Safe Remote Operations

Add error handling and rollback capabilities:

```yaml
name: Safe Deployment

ssh:
  user: deploy
  host: production.com
  key: ~/.ssh/deploy_key

steps:
  - name: pre-deployment-check
    command: |
      test -f /opt/app/backup.tar.gz || exit 1
      echo "Pre-deployment check passed"
  
  - name: create-backup
    command: tar -czf /tmp/app_backup_$(date +%s).tar.gz /opt/app/
  
  - name: deployment
    command: |
      cd /opt/app
      git pull origin main
  
  - name: verification
    command: |
      curl -f http://localhost:8080/health || {
        echo "Health check failed, rolling back..."
        exit 1
      }
  
  onExit:
    - name: rollback
      if: ${DAGU_ERR}
      command: |
        LATEST_BACKUP=$(ls -t /tmp/app_backup_*.tar.gz | head -1)
        tar -xzf "$LATEST_BACKUP" -C /
        sudo systemctl restart app
        echo "Rolled back to backup: $LATEST_BACKUP"
```

### Pattern 2: Blue-Green Deployment

Implement zero-downtime deployments:

```yaml
name: Blue-Green Deployment

ssh:
  user: deploy
  host: production.com
  key: ~/.ssh/deploy_key

steps:
  - name: deploy-green
    command: |
      cd /opt/app-green
      git pull origin main
      docker-compose up -d --build
  
  - name: health-check-green
    command: |
      for i in {1..10}; do
        curl -f http://green.example.com/health && break
        sleep 5
      done || exit 1
  
  - name: switch-traffic
    command: |
      # Update load balancer to point to green
      kubectl patch service app -p '{"spec":{"selector":{"version":"green"}}}'
  
  - name: health-check-blue
    command: |
      sleep 60  # Wait for connections to drain
      for i in {1..10}; do
        curl -f http://blue.example.com/metrics || exit 0
      done
  
  - name: scale-down-blue
    command: |
      kubectl scale deployment app-blue --replicas=0
```

### Pattern 3: Conditional Remote Execution

Use environment detection for different targets:

```yaml
name: Environment-Aware Deployment

env:
  - ENVIRONMENT: ${environment:-staging}

ssh:
  user: deploy
  host: ${HOST}
  key: ~/.ssh/deploy_key

steps:
  - name: detect-environment
    command: |
      if [ "${ENVIRONMENT}" == "production" ]; then
        HOST="prod.example.com"
      elif [ "${ENVIRONMENT}" == "staging" ]; then
        HOST="staging.example.com"
      else
        HOST="dev.example.com"
      fi
      echo "Deploying to: $HOST"
  
  - name: deploy-to-environment
    command: |
      cd /opt/app
      git checkout ${ENVIRONMENT}
      ./deploy.sh
```

### Pattern 4: Batch Operations

Execute the same operation across multiple targets:

```yaml
name: Batch Server Update

steps:
  - name: update-server-01
    executor:
      type: ssh
      config:
        user: admin
        host: server-01.cluster.internal
        key: ~/.ssh/cluster_key
    command: sudo apt update && sudo apt upgrade -y
  
  - name: update-server-02
    executor:
      type: ssh
      config:
        user: admin
        host: server-02.cluster.internal
        key: ~/.ssh/cluster_key
    command: sudo apt update && sudo apt upgrade -y
  
  - name: update-server-03
    executor:
      type: ssh
      config:
        user: admin
        host: server-03.cluster.internal
        key: ~/.ssh/cluster_key
    command: sudo apt update && sudo apt upgrade -y
  
  - name: verify-cluster
    command: echo "All servers updated"
    depends:
      - update-server-01
      - update-server-02
      - update-server-03
```

## Troubleshooting

### Common Issues and Solutions

#### 1. "SSH configuration is not found"

This error occurs when neither DAG-level nor step-level SSH configuration is provided.

**Solution**: Add SSH configuration either at DAG level or step level:

```yaml
# Option 1: DAG level
ssh:
  user: deploy
  host: server.example.com

steps:
  - command: echo "This works now"
```

```yaml
# Option 2: Step level
steps:
  - command: echo "This works now"
    executor:
      type: ssh
      config:
        user: deploy
        host: server.example.com
```

#### 2. "No authentication method available"

This happens when no SSH key or password is provided.

**Solutions**:

- Specify a key explicitly:
  ```yaml
  ssh:
    user: deploy
    host: server.example.com
    key: ~/.ssh/id_rsa
  ```

- Ensure default keys exist:
  ```bash
  ls ~/.ssh/id_rsa ~/.ssh/id_ed25519 ~/.ssh/id_ecdsa
  ```

- Use password (not recommended):
  ```yaml
  ssh:
    user: deploy
    host: server.example.com
    password: ${SSH_PASSWORD}
  ```

#### 3. Host Key Verification Failure

SSH refuses to connect due to host key mismatch.

**Solutions**:

- **Production**: Verify the host key is correct:
  ```bash
  ssh-keyscan server.example.com >> ~/.ssh/known_hosts
  ```

- **Development**: Disable strict checking (not recommended for production):
  ```yaml
  ssh:
    user: deploy
    host: server.example.com
    strictHostKey: false
  ```

#### 4. Permission Denied

SSH authentication fails.

**Checklist**:

- Verify username is correct
- Ensure SSH key has correct permissions (600)
- Test SSH connection manually:
  ```bash
  ssh -i ~/.ssh/id_rsa user@server.example.com
  ```
- Check if the key is added to authorized_keys on remote server

#### 5. Connection Timeout

Cannot establish SSH connection.

**Checklist**:

- Verify host/port is correct
- Check firewall rules allow SSH traffic
- Test network connectivity:
  ```bash
  telnet server.example.com 22
  ```
- Verify SSH service is running on remote host:
  ```bash
  ssh user@server.example.com "sudo systemctl status sshd"
  ```

#### 6. Command Not Found on Remote Server

Remote commands fail with "command not found".

**Solution**: Use full paths or set environment:

```yaml
steps:
  - command: /usr/local/bin/myapp --version
  # OR
  - command: |
      export PATH=/usr/local/bin:$PATH
      myapp --version
```

#### 7. Script Field Not Supported

SSH executor doesn't support the `script` field.

**Solution**: Use `command` with multi-line syntax:

```yaml
# Not supported ❌
steps:
  - name: backup
    script: |
      tar -czf backup.tar.gz /data

# Supported ✅
steps:
  - name: backup
    command: |
      tar -czf backup.tar.gz /data
```

### Debugging Tips

#### 1. Enable Verbose Output

Test your SSH connection manually with verbose output:

```bash
ssh -vvv -i ~/.ssh/id_rsa user@server.example.com
```

#### 2. Dry Run Workflow

Use Dagu's dry-run feature to validate configuration:

```bash
dagu dry ssh-workflow.yaml
```

#### 3. Test Individual Steps

Execute a single step with verbose logging:

```yaml
# Add this step first to test connectivity
steps:
  - name: test-connection
    command: echo "SSH connection successful"
```

```bash
dagu start ssh-workflow.yaml
```

#### 4. Check Logs

View detailed execution logs:

```bash
dagu status ssh-workflow
dagu logs ssh-workflow
```

## Best Practices Summary

✅ **Do:**

- Use key-based authentication for security
- Enable strict host key checking in production
- Use environment variables for sensitive credentials
- Test SSH connections manually before using in workflows
- Create dedicated SSH keys for automation
- Set proper permissions on SSH keys (600)
- Use descriptive step names
- Add error handling and rollback mechanisms
- Document SSH configurations
- Rotate SSH keys periodically

❌ **Don't:**

- Hardcode passwords in YAML files
- Disable strict host key checking in production
- Use the same SSH key for multiple services
- Share SSH keys across team members
- Store SSH keys in version control
- Use script field with SSH executor
- Ignore authentication failures
- Skip security best practices
- Use SSH for high-frequency operations without connection pooling

## Conclusion

Dagu's SSH executor is a powerful feature that enables remote command execution seamlessly integrated into your workflows. By following the patterns and best practices outlined in this guide, you can:

- **Automate remote operations** across multiple servers
- **Maintain security** with key-based authentication and host verification
- **Build resilient workflows** with proper error handling
- **Scale your infrastructure** operations efficiently

Whether you're deploying applications, managing databases, processing logs, or orchestrating distributed systems, the SSH executor provides the flexibility and reliability you need.

For more information, refer to the [official Dagu documentation](https://docs.dagu.cloud/features/executors/ssh).

## Additional Resources

- [Dagu Official Documentation](https://docs.dagu.cloud/)
- [SSH Best Practices](https://wiki.archlinux.org/title/SSH_keys)
- [YAML Specification](https://yaml.org/spec/)
- [Cron Expression Guide](https://crontab.guru/)

Happy automating! 🚀

