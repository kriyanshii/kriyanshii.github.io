---
title: Open Source Contributions to Dagu
date: 2026-01-26
tag: Tech
description: A summary of my contributions to Dagu — co-authoring the queue system, 20 merged PRs, 16 GitHub release credits, and production-ready features across Go, React, and Kubernetes.
---

*This post complements my other writing on [Dagu](https://github.com/dagucloud/dagu), including [enqueue, retry, and dedup](/blog/enqueue-retry-dedup), [partial success in DAG systems](/blog/partial-success), and [using the SSH executor](/blog/blog-ssh-executor). Where those posts explain how Dagu works, this one documents what I've contributed upstream.*

## Introduction

I started contributing to [Dagu](https://github.com/dagucloud/dagu) in early 2024. Dagu is a self-contained workflow orchestration engine — DAG-based, YAML-defined, and shipped as a single Go binary with a built-in web UI. It sits in a familiar space: lighter than Airflow, more capable than Cron, and practical for teams that want orchestration without standing up a heavy control plane.

The largest piece of work was **co-authoring Dagu's queue management system**, shipped in [v1.17.0](https://docs.dagu.sh/overview/changelog#v1170-2025-06-18) and credited in the official changelog under *Queue functionality implementation*. Since then I've landed **20 merged pull requests**, with **16 GitHub release credits** across 8 release pages — often co-authored with maintainer Yota Hamada.

This post is a map of that work: what shipped, where it was credited, and what's still in flight.

---

## At a Glance

| Metric | Value |
|--------|------:|
| Merged pull requests | **20** (+ co-authored core queue system) |
| GitHub releases crediting you | **16** across 8 release pages |
| Commits on `main` | **21** |
| Lines added | **~4,700** |
| Lines removed | **~1,200** |
| Files touched | **133** |
| Primary stacks | Go, React/TypeScript, OpenAPI, Helm/Kubernetes |

### By area

| Area | PRs | Approx. lines added |
|------|----:|------------------:|
| Runtime & executors | 5 | ~2,200 |
| API & backend services | 5 | ~1,000 |
| UI / frontend | 5 | ~350 |
| Infrastructure & DevOps | 3 | ~730 |
| Core configuration | 2 | ~400 |

Activity was sparse in 2024, then accelerated through 2025 — with a major queue merge in **May 2025**, a busy **November 2025** (API, jq executor, timeouts, DAG runs UI), and **February–May 2026** (Helm chart, scheduler capacity fixes, schema param defaults).

---

## About Dagu

Dagu runs workflows defined as directed acyclic graphs in YAML. A single binary handles scheduling, execution, and the web UI — no external database required. It supports local, queue-based, and distributed execution, with 18+ built-in step executors: shell, Docker, HTTP, SSH, jq, SQL, sub-DAGs, and more.

**Stack:** Go 1.26 · React 19 · TypeScript · Chi (REST) · gRPC · OpenAPI · Helm · Tailwind CSS

If you're new to the project, the [docs](https://docs.dagu.sh) are a good starting point.

---

## Featured Contributions

### Queue Management System — [v1.17.0](https://docs.dagu.sh/overview/changelog#v1170-2025-06-18) · Co-authored [#940](https://github.com/dagucloud/dagu/pull/940)

**Original implementation:** [#690](https://github.com/dagu-org/dagu/pull/690) (issue [#535](https://github.com/dagucloud/dagu/issues/535))  
**Merged to main:** May 24, 2025 · **Released in:** [v1.17.0 (June 18, 2025)](https://docs.dagu.sh/overview/changelog#v1170-2025-06-18)

Co-authored the core queue system that lets Dagu run workflows with controlled concurrency — one of the project's major v1.17.0 features. The official changelog credits **@kriyanshii** under *Queue functionality implementation*.

What it introduced:

- `dagu enqueue` / `dagu dequeue` CLI commands
- File-based persistent queue with priority and standard queues
- `Queued` workflow status and scheduler queue worker
- Queue management UI (enqueue/dequeue from the Web UI)
- Enqueue API for programmatic queueing

Foundational load-control primitive — queues, concurrency limits, and distributed workers all build on it. Original prototype ~847 lines across 21 files; shipped via [#940](https://github.com/dagucloud/dagu/pull/940) with ~5,200 lines across 115 files. Co-authored with Yota Hamada (integration & merge).

---

### Production-Ready Helm Chart for Kubernetes — [#1613](https://github.com/dagucloud/dagu/pull/1613) · [v2.0.2](https://github.com/dagucloud/dagu/releases/tag/v2.0.2)

Complete Helm chart for deploying Dagu on Kubernetes — configurable values, service definitions, and deployment templates. First-class K8s install path: **16 files, ~683 lines added**.

---

### Scheduler Global Queue Capacity on Retry — [#1676](https://github.com/dagucloud/dagu/pull/1676) · [v2.0.2](https://github.com/dagucloud/dagu/releases/tag/v2.0.2)

Retries now respect global queue capacity limits, preventing overflow when failed runs are re-queued. **13 files, ~497 lines.** Co-authored with Yota Hamada.

---

### Enqueue DAGRun from Spec API — [#1375](https://github.com/dagucloud/dagu/pull/1375) · [v1.24.0](https://github.com/dagucloud/dagu/releases/tag/v1.24.0)

REST endpoint to enqueue a DAG run from a YAML spec, without a pre-existing on-disk DAG file. **5 files, ~648 lines.** Co-authored with Yota Hamada.

---

### jq Executor `raw-output` Option — [#1392](https://github.com/dagucloud/dagu/pull/1392) · [v1.24.2](https://github.com/dagucloud/dagu/releases/tag/v1.24.2)

`raw-output` option for unquoted string output, matching `jq -r` behavior. **3 files, ~634 lines** including tests. Co-authored with Yota Hamada.

---

### Step-Level `timeoutSec` — [#1412](https://github.com/dagucloud/dagu/pull/1412) · [v1.24.8](https://github.com/dagucloud/dagu/releases/tag/v1.24.8)

Per-step timeout configuration, independent of DAG-level timeouts. **15 files, ~440 lines.** Co-authored with Yota Hamada.

---

### Custom Exit Codes on Retry — [#902](https://github.com/dagucloud/dagu/pull/902) · [v1.16.8](https://github.com/dagucloud/dagu/releases/tag/v1.16.8)

Define which exit codes trigger a step retry — retry on transient failures, not expected ones. **7 files, ~624 lines.**

---

### Lock Parameters and Run ID — [#1176](https://github.com/dagucloud/dagu/pull/1176) · [v1.20.0](https://github.com/dagucloud/dagu/releases/tag/v1.20.0)

DAG-level config to lock parameters and run IDs during re-runs or scheduled executions. **12 files, ~383 lines.** Co-authored with Yota Hamada.

---

### Clear Queue Functionality — [#1299](https://github.com/dagucloud/dagu/pull/1299) · [v1.22.10](https://github.com/dagucloud/dagu/releases/tag/v1.22.10)

REST API plus UI controls on `/queues` for draining stuck queue entries. **4 files, ~262 lines.** Co-authored with Yota Hamada.

---

### Running/Failed Steps on DAG Runs Page — [#1420](https://github.com/dagucloud/dagu/pull/1420) · [v1.24.11](https://github.com/dagucloud/dagu/releases/tag/v1.24.11)

Inline running and failed step names on the DAG runs list — faster triage without drilling into details. **4 files, ~177 lines.**

---

### Queue Override on Enqueue — [#1240](https://github.com/dagucloud/dagu/pull/1240) · [v1.22.3](https://github.com/dagucloud/dagu/releases/tag/v1.22.3)

Override the target queue when enqueuing a DAG run, via CLI flag and API request body. **15 files, ~118 lines.**

---

### `--from-run-id` CLI Flag — Co-authored [#1378](https://github.com/dagucloud/dagu/pull/1378) · [v1.24.0](https://github.com/dagucloud/dagu/releases/tag/v1.24.0)

`--from-run-id` on the `start` command — new runs inherit context from a previous DAG run history entry. Co-authored with Yota Hamada.

---

### Disable Step Retry While DAG Is Running — [#1447](https://github.com/dagucloud/dagu/pull/1447) · [v1.26.2](https://github.com/dagucloud/dagu/releases/tag/v1.26.2)

Disabled per-step retry controls in the Web UI during active execution — avoids conflicting retry actions mid-run. **1 file, ~10 lines.**

---

### Fix Dequeue Queue Name in Runtime — [#1481](https://github.com/dagucloud/dagu/pull/1481) · [v1.26.4](https://github.com/dagucloud/dagu/releases/tag/v1.26.4)

Fixed the runtime `Dequeue` command builder to pass the queue name as a positional argument. API-initiated dequeue was failing because the CLI expected `dagu dequeue <queue-name>` but the name was omitted. **2 files, ~23 lines.**

---

### Fix Empty Schema Params for Eval Defaults — [#2173](https://github.com/dagucloud/dagu/pull/2173) · [v2.7.2](https://github.com/dagucloud/dagu/releases/tag/v2.7.2)

Start/Enqueue modal now omits empty parameter values from the request payload, so eval-backed defaults (e.g. `${NOW}`) resolve correctly instead of being overridden by blank strings. **2 files, ~20 lines.**

---

## All Merged Pull Requests

| # | Title | Date | Release | +Lines | Area |
|--:|-------|------|---------|-------:|------|
| — | **Queue management system** (co-authored [#940](https://github.com/dagucloud/dagu/pull/940)) | 2025-05 | [v1.17.0](https://github.com/dagucloud/dagu/releases/tag/v1.17.0-beta.1) | ~5,200 | Core / Scheduler |
| [558](https://github.com/dagucloud/dagu/pull/558) | Configurable DAG status display | 2024-04 | [v1.13.0](https://github.com/dagucloud/dagu/releases/tag/v1.13.0) | 16 | UI / Core |
| [765](https://github.com/dagucloud/dagu/pull/765) | Improved parameter handling | 2025-01 | — | 14 | Core |
| [805](https://github.com/dagucloud/dagu/pull/805) | Headless mode support | 2025-02 | [v1.16.1](https://github.com/dagucloud/dagu/releases/tag/v1.16.1) | 42 | CLI / Infra |
| [899](https://github.com/dagucloud/dagu/pull/899) | DAG graph zoom in/out | 2025-04 | [v1.16.8](https://github.com/dagucloud/dagu/releases/tag/v1.16.8) | 84 | UI |
| [904](https://github.com/dagucloud/dagu/pull/904) | Makefile `build-ui` target | 2025-04 | [v1.16.8](https://github.com/dagucloud/dagu/releases/tag/v1.16.8) | 6 | DevOps |
| [902](https://github.com/dagucloud/dagu/pull/902) | Custom exit codes on retry | 2025-04 | [v1.16.8](https://github.com/dagucloud/dagu/releases/tag/v1.16.8) | 624 | Runtime |
| [1126](https://github.com/dagucloud/dagu/pull/1126) | Remove hardcoded paginator limit | 2025-07 | — | 4 | API |
| [1176](https://github.com/dagucloud/dagu/pull/1176) | Lock parameters and run ID | 2025-08 | [v1.20.0](https://github.com/dagucloud/dagu/releases/tag/v1.20.0) | 383 | Core / API |
| [1240](https://github.com/dagucloud/dagu/pull/1240) | Queue override on enqueue (CLI + API) | 2025-09 | [v1.22.3](https://github.com/dagucloud/dagu/releases/tag/v1.22.3) | 118 | API / CLI |
| [1299](https://github.com/dagucloud/dagu/pull/1299) | Clear queue functionality | 2025-10 | [v1.22.10](https://github.com/dagucloud/dagu/releases/tag/v1.22.10) | 262 | API / UI |
| [1375](https://github.com/dagucloud/dagu/pull/1375) | Enqueue DAGRun from spec API | 2025-11 | [v1.24.0](https://github.com/dagucloud/dagu/releases/tag/v1.24.0) | 648 | API |
| [1378](https://github.com/dagucloud/dagu/pull/1378) | `--from-run-id` CLI flag (co-authored) | 2025-11 | [v1.24.0](https://github.com/dagucloud/dagu/releases/tag/v1.24.0) | — | CLI |
| [1383](https://github.com/dagucloud/dagu/pull/1383) | Fix DAG zoom-out rendering | 2025-11 | [v1.24.0](https://github.com/dagucloud/dagu/releases/tag/v1.24.0) | 26 | UI |
| [1392](https://github.com/dagucloud/dagu/pull/1392) | jq executor `raw-output` option | 2025-11 | [v1.24.2](https://github.com/dagucloud/dagu/releases/tag/v1.24.2) | 634 | Runtime |
| [1412](https://github.com/dagucloud/dagu/pull/1412) | Step-level `timeoutSec` | 2025-11 | [v1.24.8](https://github.com/dagucloud/dagu/releases/tag/v1.24.8) | 440 | Runtime |
| [1420](https://github.com/dagucloud/dagu/pull/1420) | Running/failed steps on DAG runs page | 2025-11 | [v1.24.11](https://github.com/dagucloud/dagu/releases/tag/v1.24.11) | 177 | UI |
| [1447](https://github.com/dagucloud/dagu/pull/1447) | Disable step retry while DAG is running | 2025-12 | [v1.26.2](https://github.com/dagucloud/dagu/releases/tag/v1.26.2) | 10 | UI |
| [1481](https://github.com/dagucloud/dagu/pull/1481) | Fix queue name in dequeue command | 2025-12 | [v1.26.4](https://github.com/dagucloud/dagu/releases/tag/v1.26.4) | 23 | Runtime |
| [1613](https://github.com/dagucloud/dagu/pull/1613) | Production-ready Helm chart | 2026-02 | [v2.0.2](https://github.com/dagucloud/dagu/releases/tag/v2.0.2) | 683 | Infra |
| [1676](https://github.com/dagucloud/dagu/pull/1676) | Scheduler queue capacity on retry | 2026-02 | [v2.0.2](https://github.com/dagucloud/dagu/releases/tag/v2.0.2) | 497 | Scheduler |
| [2173](https://github.com/dagucloud/dagu/pull/2173) | Fix empty schema params for eval defaults | 2026-05 | [v2.7.2](https://github.com/dagucloud/dagu/releases/tag/v2.7.2) | 20 | UI |

---

## GitHub Release Credits

Mentions of **@kriyanshii** across [dagucloud/dagu releases](https://github.com/dagucloud/dagu/releases) (16 releases on 8 pages):

| Page | Release | What you're credited for |
|------|---------|--------------------------|
| [1](https://github.com/dagucloud/dagu/releases) | [v2.7.2](https://github.com/dagucloud/dagu/releases/tag/v2.7.2) | Schema params eval-defaults fix ([#2173](https://github.com/dagucloud/dagu/pull/2173)) |
| [6](https://github.com/dagucloud/dagu/releases?page=6) | [v2.0.2](https://github.com/dagucloud/dagu/releases/tag/v2.0.2) | Helm chart ([#1613](https://github.com/dagucloud/dagu/pull/1613)), queue capacity on retry ([#1676](https://github.com/dagucloud/dagu/pull/1676)), tag-wise search ([#1494](https://github.com/dagucloud/dagu/issues/1494)); special thanks for v2.0.0 feedback |
| [7](https://github.com/dagucloud/dagu/releases?page=7) | [v1.26.4](https://github.com/dagucloud/dagu/releases/tag/v1.26.4) | Dequeue fix ([#1481](https://github.com/dagucloud/dagu/pull/1481)), singleton flag request ([#1460](https://github.com/dagucloud/dagu/issues/1460)) |
| [7](https://github.com/dagucloud/dagu/releases?page=7) | [v1.26.2](https://github.com/dagucloud/dagu/releases/tag/v1.26.2) | Stop step retry UI ([#1447](https://github.com/dagucloud/dagu/pull/1447)), queued DAGs bug report ([#1437](https://github.com/dagucloud/dagu/issues/1437)) |
| [7](https://github.com/dagucloud/dagu/releases?page=7) | [v1.24.11](https://github.com/dagucloud/dagu/releases/tag/v1.24.11) | Running/failed steps list ([#1420](https://github.com/dagucloud/dagu/pull/1420)) |
| [7](https://github.com/dagucloud/dagu/releases?page=7) | [v1.24.8](https://github.com/dagucloud/dagu/releases/tag/v1.24.8) | Step-level `timeoutSec` ([#1412](https://github.com/dagucloud/dagu/pull/1412)) |
| [8](https://github.com/dagucloud/dagu/releases?page=8) | [v1.24.2](https://github.com/dagucloud/dagu/releases/tag/v1.24.2) | jq raw-output ([#1392](https://github.com/dagucloud/dagu/pull/1392)) |
| [8](https://github.com/dagucloud/dagu/releases?page=8) | [v1.24.0](https://github.com/dagucloud/dagu/releases/tag/v1.24.0) | `--from-run-id` co-author ([#1378](https://github.com/dagucloud/dagu/pull/1378)), inline spec enqueue ([#1375](https://github.com/dagucloud/dagu/pull/1375)), zoom-out fix ([#1380](https://github.com/dagucloud/dagu/issues/1380)) |
| [8](https://github.com/dagucloud/dagu/releases?page=8) | [v1.23.0](https://github.com/dagucloud/dagu/releases/tag/v1.23.0) | Queue override + clear queue ([#1240](https://github.com/dagucloud/dagu/pull/1240), [#1299](https://github.com/dagucloud/dagu/pull/1299)) |
| [8](https://github.com/dagucloud/dagu/releases?page=8) | [v1.22.10](https://github.com/dagucloud/dagu/releases/tag/v1.22.10) | Clear queue UI ([#1299](https://github.com/dagucloud/dagu/pull/1299)) |
| [9](https://github.com/dagucloud/dagu/releases?page=9) | [v1.22.3](https://github.com/dagucloud/dagu/releases/tag/v1.22.3) | Queue override on enqueue ([#1240](https://github.com/dagucloud/dagu/pull/1240)) |
| [9](https://github.com/dagucloud/dagu/releases?page=9) | [v1.20.0](https://github.com/dagucloud/dagu/releases/tag/v1.20.0) | Lock parameters & run ID ([#1176](https://github.com/dagucloud/dagu/pull/1176)) |
| [12](https://github.com/dagucloud/dagu/releases?page=12) | [v1.17.0-beta.1](https://github.com/dagucloud/dagu/releases/tag/v1.17.0-beta.1) | Queue functionality implementation (co-authored [#940](https://github.com/dagucloud/dagu/pull/940)) |
| [13](https://github.com/dagucloud/dagu/releases?page=13) | [v1.16.8](https://github.com/dagucloud/dagu/releases/tag/v1.16.8) | Zoom in/out ([#899](https://github.com/dagucloud/dagu/pull/899)), Makefile ([#904](https://github.com/dagucloud/dagu/pull/904)), custom exit codes ([#902](https://github.com/dagucloud/dagu/pull/902)) |
| [13](https://github.com/dagucloud/dagu/releases?page=13) | [v1.16.1](https://github.com/dagucloud/dagu/releases/tag/v1.16.1) | Headless mode ([#805](https://github.com/dagucloud/dagu/pull/805)) |
| [15](https://github.com/dagucloud/dagu/releases?page=15) | [v1.13.0](https://github.com/dagucloud/dagu/releases/tag/v1.13.0) | Configurable DAG status ([#558](https://github.com/dagucloud/dagu/pull/558)) — first contribution |

> **Note:** [v1.17.0](https://github.com/dagucloud/dagu/releases/tag/v1.17.0) stable credits the queue system in the [docs changelog](https://docs.dagu.sh/overview/changelog#v1170-2025-06-18) but not in the GitHub release body. [#765](https://github.com/dagucloud/dagu/pull/765) and [#1126](https://github.com/dagucloud/dagu/pull/1126) are merged but not called out in any GitHub release notes.

---

## Community & Issue Credits

Credited in release notes without direct code PR authorship:

| Item | Type | Release |
|------|------|---------|
| [#1494](https://github.com/dagucloud/dagu/issues/1494) Tag-wise search for DAG runs | Feature request (shipped in [#1576](https://github.com/dagucloud/dagu/pull/1576)) | [v2.0.2](https://github.com/dagucloud/dagu/releases/tag/v2.0.2) |
| [#1460](https://github.com/dagucloud/dagu/issues/1460) Singleton enqueue flag | Feature request | [v1.26.4](https://github.com/dagucloud/dagu/releases/tag/v1.26.4) |
| [#1437](https://github.com/dagucloud/dagu/issues/1437) Queued DAGs not starting | Bug report | [v1.26.2](https://github.com/dagucloud/dagu/releases/tag/v1.26.2) |
| v2.0.0 development cycle | Feedback & ideas (special thanks) | [v2.0.2](https://github.com/dagucloud/dagu/releases/tag/v2.0.2) |

---

## What This Work Touches

- **Backend (Go):** Queue scheduler, REST API design, executor plugins, runtime engine, OpenAPI codegen
- **Frontend (React/TypeScript):** Queue management UI, DAG visualization, run monitoring, form/schema handling
- **DevOps:** Helm charts, Kubernetes manifests, Makefile tooling, headless/CLI modes
- **Testing:** Executor test suites, API integration patterns, race-detection CI compatibility
- **Open source process:** Issue-driven development, PR review cycles, co-authored features with maintainers

---

## Still in Progress

| Issue | Description |
|-------|-------------|
| [#1265](https://github.com/dagucloud/dagu/issues/1265) | Warning for explicit dependencies in chain-mode DAGs |
| [#1347](https://github.com/dagucloud/dagu/issues/1347) | Start fresh DAGRun with a different run ID from history |
| — | Status-wise search enhancements on DAG runs page |

---

## Links

- **GitHub:** [@kriyanshii](https://github.com/kriyanshii)
- **Project:** [dagucloud/dagu](https://github.com/dagucloud/dagu)
- **Documentation:** [docs.dagu.sh](https://docs.dagu.sh)
- **Releases:** [github.com/dagucloud/dagu/releases](https://github.com/dagucloud/dagu/releases)
- **All PRs:** [github.com/kriyanshii?q=dagu](https://github.com/kriyanshii?q=dagu)
