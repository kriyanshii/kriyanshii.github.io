import { ProjectItem } from '../types';

export const RESUME_URL =
  'https://drive.google.com/file/d/1dhh-xB0SQqPRl-XTrPcdsw6Eq3slHWTH/view?usp=drive_link';

export interface TalkItem {
  title: string;
  description: string;
  year: string;
  tag: string;
  link: string;
  linkLabel?: string;
}

export interface OpensourceBullet {
  status: 'merged' | 'open';
  label: string;
  text: string;
  href: string;
}

export interface OpensourceHighlight {
  project: string;
  summary: string;
  bullets?: OpensourceBullet[];
  links: { label: string; href: string }[];
}

export const workItems: ProjectItem[] = [
  {
    type: 'job',
    title: 'Matrix Business',
    role: 'Software Engineer',
    date: 'Mar 2026 — Present',
    description:
      'Built and deployed a production self-service Background Verification (BGV) platform, owning backend architecture, customer onboarding, verification workflows, and production deployment from design to launch.',
    isNew: true,
    bulletPoints: [
      'Led the engineering of a production self-service BGV platform, from backend architecture and APIs to deployment and production support.',
      'Designed backend services powering authentication, customer onboarding, document verification, reporting, and payment workflows using FastAPI and PostgreSQL.',
      'Designed a Backend-for-Frontend (BFF) layer that simplified communication between the portal, verification services, payment gateway, and storage systems.',
      'Managed production deployments using Docker and Nginx, resolving authentication, routing, and reverse proxy issues in production environments.',
    ],
  },
  {
    type: 'job',
    title: 'Independent Software Engineer',
    role: 'Products & Open Source',
    date: 'Mar 2026 — Ongoing',
    description:
      'Built products and contributed to open-source infrastructure in parallel with full-time work — shipping apps, exploring on-device AI, and deepening distributed systems through production contributions.',
    link: '/projects',
    bulletPoints: [
      'Built Recite Online, an educational platform that helps students practise speeches and recitations with progress tracking and self-paced learning.',
      'Developed Serenity Workspace, a productivity application focused on structured planning and personal knowledge management.',
      'Built Android Skill Router, a fine-tuned 3B-model system that turns natural language into reusable Android UI automation skills.',
      'Contributed to Dagu: a production Kubernetes Helm chart (scheduler, worker, UI, coordinator, PVC) and queue retries that enqueue instead of running immediately.',
      'First contribution to Temporal worker-controller (Helm extraEnv proxy docs and EnvVar schema validation, shipped in v1.10.0). Open pull request on Temporal Helm charts for optional defaultDb.',
      'Contributed to the Ray ecosystem while exploring distributed execution and large-scale compute orchestration.',
    ],
    links: [
      { label: 'Recite Online', href: 'https://www.recite.online/' },
      { label: 'Serenity Workspace', href: 'https://sereneworkspace.netlify.app/' },
      { label: 'Android Skill Router', href: '/blog/android-skill-router' },
      { label: 'Dagu', href: 'https://dagu.sh/' },
      { label: 'GitHub', href: 'https://github.com/kriyanshii' },
      { label: 'Ray', href: 'https://github.com/kriyanshii/ray/commits/master/?author=kriyanshii' },
    ],
  },
  {
    type: 'job',
    title: 'Cloudraft',
    role: 'Software Engineer',
    date: 'Jan 2026 — Mar 2026',
    description:
      'Led the migration of n8n workflows from Docker to self-managed Kubernetes, designing production platform primitives for reliable workflow orchestration at scale.',
    link: 'https://cloudraft.io',
    bulletPoints: [
      'Led migration of n8n workflows from Docker to self-managed Kubernetes for production reliability and scale.',
      'Designed Kubernetes namespaces, Deployments, StatefulSets, Services, Ingress, ConfigMaps, and Secrets for the platform.',
      'Architected a self-managed cluster layout that separates workloads, configuration, and secrets for safer operations.',
      'Delivered platform engineering improvements that make workflow orchestration easier to deploy, operate, and extend.',
    ],
  },
  {
    type: 'job',
    title: 'Space Applications Centre (ISRO)',
    role: 'Software Engineer',
    date: 'Sep 2023 — Dec 2025',
    description:
      'Worked on mission-critical software powering the processing of geostationary weather satellite data for the INSAT-3DS mission, building distributed systems used for continuous scientific data processing.',
    bulletPoints: [
      'Architected and developed a distributed workflow orchestration platform using Go and React for automated INSAT-3DS satellite image processing.',
      'Designed and implemented end-to-end processing pipelines and microservices to ingest, process, and distribute geospatial satellite data.',
      'Built an interactive scientific computing platform using JupyterHub, custom JupyterLab extensions, and domain-specific Docker images for meteorological and oceanographic analysis.',
      'Engineered containerized environments that enabled reliable deployments in air-gapped infrastructure while simplifying software distribution and maintenance.',
      'Integrated geospatial processing libraries and scientific tooling into production workflows to automate satellite data processing.',
      'Improved the reliability and maintainability of systems responsible for continuous satellite data processing and workflow execution.',
    ],
  },
];

export const projectItems: ProjectItem[] = [
  {
    type: 'project',
    title: 'Android Skill Router: On-Device UI Automation',
    date: 'Jun 2026 — Present',
    description:
      'A lightweight AI system that converts natural language into reusable Android automation skills using a fine-tuned 3B language model and recorded UI trajectories.',
    link: 'https://huggingface.co/spaces/build-small-hackathon/android-skill-router',
    isNew: true,
    bulletPoints: [
      'Fine-tuned Qwen2.5-3B using QLoRA (Unsloth) on Modal, with a synthetic intent dataset for Android automation.',
      'Built an end-to-end inference pipeline from prompt to executable UI trajectory, and deployed a Gradio demo on Hugging Face Spaces.',
    ],
    stack: ['Python', 'Qwen2.5-3B', 'Unsloth', 'Modal', 'Gradio', 'Kotlin'],
    links: [
      { label: 'Write-up', href: '/blog/android-skill-router' },
      { label: 'Live demo', href: 'https://huggingface.co/spaces/build-small-hackathon/android-skill-router' },
    ],
  },
  {
    type: 'project',
    title: 'Recite Online: Guided Recitation Practice',
    date: '2025 — Present',
    description:
      'A web application that helps students practise speeches, poems, and recitations independently with progress tracking.',
    link: 'https://www.recite.online/',
    isNew: true,
    bulletPoints: [
      'Designed and built a full-stack app for self-paced recitation practice across desktop and mobile.',
      'Iterated on the product from user feedback to improve usability, engagement, and progress tracking.',
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    type: 'project',
    title: 'VisionBoardIt: Visual Goal Boards',
    date: 'Dec 2025',
    description:
      'Create beautiful vision boards with photos, notes, and emojis.',
    link: 'https://visionboardit.art/?ref=producthunt',
    isNew: true,
    bulletPoints: [
      'Built a vision board product with photos, notes, and emoji composition for personal goal-setting.',
      'Shipped a polished web experience with Japanese-inspired visual design.',
    ],
    stack: ['React', 'TypeScript'],
  },
  {
    type: 'project',
    title: 'dagu: Workflow Orchestration Engine',
    date: 'Sep 2025 — Present',
    description:
      'Open-source workflow engine contributions across backend, frontend, and deployment.',
    link: 'https://dagu.sh/',
    isNew: true,
    bulletPoints: [
      'Production Kubernetes Helm chart (scheduler, worker, UI, coordinator, PVC). Merged 1 Feb 2026.',
      'Global-queue DAG retries enqueue instead of running immediately, so they respect queue capacity (API + CLI). Merged 16 Feb 2026.',
    ],
    stack: ['Go', 'React', 'TypeScript', 'Kubernetes'],
    links: [
      { label: 'dagu.sh', href: 'https://dagu.sh/' },
      { label: '#1613 Helm chart', href: 'https://github.com/dagu-org/dagu/pull/1613' },
      { label: '#1676 queue retries', href: 'https://github.com/dagu-org/dagu/pull/1676' },
      { label: 'Write-up', href: '/blog/enqueue-retry-dedup' },
      { label: 'Contributions summary', href: '/blog/open-source-contributions' },
    ],
  },
  {
    type: 'project',
    title: 'Temporal: Worker Controller & Helm Charts',
    date: '2026',
    description:
      'Helm docs, schema validation, and an open chart change for Temporal.',
    link: 'https://github.com/temporalio/temporal-worker-controller/pull/558',
    isNew: true,
    bulletPoints: [
      'Helm extraEnv proxy docs and EnvVar schema validation on temporal-worker-controller. Shipped in v1.10.0. First contribution on that repo.',
      'Open: optional defaultDb so the schema job can pass --defaultdb (Citus / Aiven). Fixes #433. Opened 1 Sep 2026.',
    ],
    stack: ['Helm', 'Kubernetes'],
    links: [
      { label: '#558 worker-controller', href: 'https://github.com/temporalio/temporal-worker-controller/pull/558' },
      { label: 'v1.10.0', href: 'https://github.com/temporalio/temporal-worker-controller/releases/tag/v1.10.0' },
      { label: '#976 helm-charts (open)', href: 'https://github.com/temporalio/helm-charts/pull/976' },
    ],
  },
  {
    type: 'project',
    title: 'Serene: Productivity Workspace',
    date: 'Feb 2025 — Present',
    description:
      'A personalized productivity tool for structured planning and day-to-day task management.',
    link: 'https://sereneworkspace.xyz/',
    isNew: true,
    bulletPoints: [
      'Built a productivity workspace focused on structured planning and personal knowledge management.',
      'Continuing to ship UX and feature updates based on day-to-day use.',
    ],
    stack: ['React', 'TypeScript'],
  },
  {
    type: 'project',
    title: 'MapReduce: Distributed Systems from Scratch',
    date: 'Jan 2025',
    description:
      "Implemented the MapReduce paper from MIT's Distributed Systems course (MIT 6.5840) in Go.",
    link: 'https://github.com/kriyanshii/mit-6.5840',
    bulletPoints: [
      "Implemented MIT 6.5840 MapReduce in Go — parallel data processing, distributed computing, and fault tolerance.",
    ],
    stack: ['Go', 'Distributed Systems'],
  },
  {
    type: 'project',
    title: 'Shell: Unix Shell from Scratch',
    date: 'Dec 2024',
    description: 'A minimalist Unix shell built from scratch in Go.',
    link: 'https://github.com/kriyanshii/shell-go',
    bulletPoints: ['Built a minimalist Unix shell from scratch in Go.'],
    stack: ['Go'],
  },
  {
    type: 'project',
    title: 'Grep: Pattern Matching from Scratch',
    date: 'Feb 2025',
    description: 'An implementation of the classic grep utility built from scratch in Go.',
    link: 'https://github.com/kriyanshii/grep-go',
    bulletPoints: ['Implemented the classic grep utility from scratch in Go.'],
    stack: ['Go'],
  },
  {
    type: 'project',
    title: 'Rock Paper Scissors',
    date: 'Nov 2024',
    description: 'A classic Rock-Paper-Scissors game in TypeScript.',
    link: 'https://github.com/kriyanshii/rock-paper-scissors',
    bulletPoints: ['Implemented Rock-Paper-Scissors in TypeScript.'],
    stack: ['TypeScript'],
  },
  {
    type: 'project',
    title: 'Bubble Burst',
    date: 'Dec 2024',
    description: 'A browser game where you pop bubbles as they appear on screen.',
    link: 'https://github.com/kriyanshii/bubble-burst',
    bulletPoints: ['Built a browser game where bubbles appear on screen and must be popped.'],
    stack: ['TypeScript'],
  },
  {
    type: 'project',
    title: 'Wordle: From Scratch',
    date: 'Jan 2025',
    description: 'A from-scratch Wordle implementation in TypeScript.',
    link: 'https://github.com/kriyanshii/wordle',
    bulletPoints: ['Implemented Wordle from scratch in TypeScript.'],
    stack: ['TypeScript'],
  },
];

export const talkItems: TalkItem[] = [
  {
    title: 'Escaping Cron Hell: Building and Contributing to Dagu',
    description: 'IndiaFOSS 2026, Cloud & DevOps, 27 Sep.',
    year: '2026',
    tag: 'Conference Talk',
    link: 'https://fossunited.org/c/indiafoss/2026/cfp/8ne6l7qetc',
    linkLabel: 'Session',
  },
  {
    title: 'Interactive Computing Environments for Open Science',
    description:
      'Scalable JupyterHub deployments and Mercury integration for scientific research workflows.',
    year: '2025',
    tag: 'Conference Talk',
    link: 'https://youtu.be/6o_XY5jBchY?si=lZssP4yTXsjFuYQx',
  },
];

export const opensourceHighlights: OpensourceHighlight[] = [
  {
    project: 'Dagu',
    summary:
      'Co-authored the queue system (v1.17.0), with 20 merged PRs and 16 GitHub release credits.',
    bullets: [
      {
        status: 'merged',
        label: '#1613',
        text: 'Production Kubernetes Helm chart (scheduler, worker, UI, coordinator, PVC). Merged 1 Feb 2026.',
        href: 'https://github.com/dagu-org/dagu/pull/1613',
      },
      {
        status: 'merged',
        label: '#1676',
        text: 'Retries for global-queue DAGs enqueue instead of running immediately, so they respect queue capacity (API + CLI). Merged 16 Feb 2026.',
        href: 'https://github.com/dagu-org/dagu/pull/1676',
      },
    ],
    links: [
      { label: 'dagu.sh', href: 'https://dagu.sh/' },
      { label: 'GitHub', href: 'https://github.com/kriyanshii' },
      { label: 'Contributions on GitHub', href: 'https://github.com/dagu-org/dagu/commits/main/?author=kriyanshii' },
      { label: 'Write-up on this site', href: '/blog/open-source-contributions' },
      { label: 'Enqueue, retry, dedup', href: '/blog/enqueue-retry-dedup' },
    ],
  },
  {
    project: 'Temporal',
    summary: 'Helm and schema work on the worker controller and the Temporal Helm charts.',
    bullets: [
      {
        status: 'merged',
        label: 'worker-controller #558',
        text: 'Helm extraEnv proxy docs and EnvVar schema validation. Shipped in v1.10.0. First contribution on that repo.',
        href: 'https://github.com/temporalio/temporal-worker-controller/pull/558',
      },
      {
        status: 'open',
        label: 'helm-charts #976',
        text: 'Optional defaultDb so the schema job can pass --defaultdb (Citus / Aiven). Fixes #433. Opened 1 Sep 2026.',
        href: 'https://github.com/temporalio/helm-charts/pull/976',
      },
    ],
    links: [
      { label: 'v1.10.0 release', href: 'https://github.com/temporalio/temporal-worker-controller/releases/tag/v1.10.0' },
      { label: '#976 (open)', href: 'https://github.com/temporalio/helm-charts/pull/976' },
    ],
  },
  {
    project: 'Ray',
    summary:
      'Contributions to Ray core and Ray Data — actor lifecycle fixes, dual-task error handling, datasource test organization, and Grafana observability panels.',
    links: [
      { label: 'Contributions on GitHub', href: 'https://github.com/kriyanshii/ray/commits/master/?author=kriyanshii' },
    ],
  },
];
