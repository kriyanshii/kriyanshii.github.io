import { ProjectItem } from '../types';

export const RESUME_URL =
  'https://drive.google.com/file/d/1cfHx8_s2gi52WUW-W4R3EBNCw-INK_cI/view?usp=sharing';

export interface TalkItem {
  title: string;
  description: string;
  year: string;
  tag: string;
  link: string;
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
      'Became one of the leading contributors to Dagu, implementing workflow orchestration features across the Go backend and React frontend.',
      'Contributed to the Ray ecosystem while exploring distributed execution and large-scale compute orchestration.',
    ],
    links: [
      { label: 'Recite Online', href: 'https://www.recite.online/' },
      { label: 'Serenity Workspace', href: 'https://sereneworkspace.netlify.app/' },
      { label: 'Android Skill Router', href: '/blog/android-skill-router' },
      { label: 'Dagu', href: 'https://github.com/dagu-org/dagu/commits/main/?author=kriyanshii' },
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
      'Delivered mission-critical distributed workflow systems supporting geostationary weather satellite processing.',
    bulletPoints: [
      'Architected workflow orchestration software using Go and React for satellite data processing pipelines.',
      'Automated scientific processing pipelines for geostationary weather satellite data.',
      'Designed containerized environments for air-gapped deployments.',
      'Integrated geospatial processing tools into production workflow systems.',
      'Improved reliability of production workflow systems supporting continuous satellite data streams.',
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
    link: 'https://github.com/dagu-org/dagu/commits/main/?author=kriyanshii',
    isNew: true,
    bulletPoints: [
      'Implemented enqueue logic, exit-code based retries, and controlled execution configs for reproducible runs.',
      'Added DAG visualization zoom support and improved frontend build stability for the development workflow.',
    ],
    stack: ['Go', 'React', 'TypeScript', 'Kubernetes'],
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
    title: 'Interactive Computing Environments for Open Science',
    description:
      'Scalable JupyterHub deployments and Mercury integration for scientific research workflows.',
    year: '2025',
    tag: 'Conference Talk',
    link: 'https://youtu.be/6o_XY5jBchY?si=lZssP4yTXsjFuYQx',
  },
];

export const opensourceHighlights = [
  {
    project: 'Dagu',
    summary:
      'Co-authored Dagu\'s queue management system (v1.17.0), 20 merged PRs, and 16 GitHub release credits — queue tooling, Helm/Kubernetes deployment, DAG run controls, and API design.',
    links: [
      { label: 'Contributions on GitHub', href: 'https://github.com/dagu-org/dagu/commits/main/?author=kriyanshii' },
      { label: 'Write-up on this site', href: '/blog/open-source-contributions' },
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
