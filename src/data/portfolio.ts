import { ProjectItem } from '../types';

export const RESUME_URL =
  'https://drive.google.com/file/d/1jd2R2RyD9PpCPsIayLTL5Pi15gEE8YB6/view?usp=sharing';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/kriyanshi-shah';
export const EMAIL = 'kriyanshishah06@gmail.com';
export const GITHUB_URL = 'https://github.com/kriyanshii';
export const OPEN_SOURCE_SUMMARY =
  '37 merged PRs to open-source projects, including Dagu (24 PRs: production Helm chart, queue capacity controls, step-level timeouts, CLI), Ray (4 PRs, shipped in Ray 2.54.0) and Temporal worker-controller (Helm).';

export interface TalkItem {
  title: string;
  description: string;
  year: string;
  tag: string;
  link: string;
  linkLabel?: string;
}

export interface OpensourcePr {
  label: string;
  href: string;
}

export interface OpensourceBullet {
  status: 'merged' | 'open';
  prs: OpensourcePr[];
  join?: 'and' | 'comma';
  text: string;
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
    title: 'Independent Software Engineer',
    role: 'Remote',
    date: 'Aug 2026 — Present',
    description: '',
    isNew: true,
    bulletPoints: [
      'Open source: 37 merged PRs across workflow and distributed-systems projects. [Full list](https://github.com/pulls?q=is%3Apr+author%3Akriyanshii+is%3Amerged).',
      'Dagu (top contributor, 24 merged PRs): production-grade Helm chart; queueing with global capacity controls for thousands of concurrent DAGs, including a fix for queue capacity on retry; queue override/clear; enqueue-from-spec API; step-level timeouts; retry with downstream steps; ps/ls/rm CLI with history purge; status-based search/filtering with real-time updates.',
      'Ray (4 merged PRs, shipped in Ray 2.54.0): fixed an actor-handle kill crash, dual task error handling, and a Grafana metric.',
      'Temporal worker-controller (3 merged PRs): Helm chart values.schema.json validation and CI improvements.',
      'Products: [Serene](https://sereneworkspace.xyz), a focus-desk web app with tasks, notes and Pro billing, built solo, with 66 users and no marketing; also Recite and Android Skill Router.',
      'Speaker: "[Escaping Cron Hell: Building and Contributing to Dagu](https://fossunited.org/c/indiafoss/2026/cfp/8ne6l7qetc)" at IndiaFOSS 2026.',
    ],
  },
  {
    type: 'job',
    title: 'Matrix Business',
    role: 'Software Engineer',
    date: 'Mar 2026 — Aug 2026',
    description:
      'Built and deployed a production self-service Background Verification (BGV) platform, owning backend architecture, customer onboarding, verification workflows, and production deployment from design to launch.',
    bulletPoints: [
      'Led the engineering of a production self-service BGV platform, from backend architecture and APIs to deployment and production support.',
      'Designed backend services powering authentication, customer onboarding, document verification, reporting, and payment workflows using FastAPI and PostgreSQL.',
      'Designed a Backend-for-Frontend (BFF) layer that simplified communication between the portal, verification services, payment gateway, and storage systems.',
      'Managed production deployments using Docker and Nginx, resolving authentication, routing, and reverse proxy issues in production environments.',
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
    title: 'Serene',
    date: '',
    description:
      'A calm in-browser focus desk with a timer, tasks, notes, account sync and Pro billing, built solo from scratch. 66 users with no marketing.',
    link: 'https://sereneworkspace.xyz',
  },
  {
    type: 'project',
    title: 'Dagu',
    date: '',
    description:
      'Top contributor to an open-source workflow engine (24 merged PRs), including a production Helm chart, queueing with global capacity controls, step-level timeouts and CLI tools.',
    link: 'https://dagu.sh',
  },
  {
    type: 'project',
    title: 'MapReduce, MIT 6.5840',
    date: '',
    description:
      "A distributed MapReduce in Go with a coordinator and workers, built for MIT's distributed systems course, with fault tolerance.",
    link: 'https://github.com/kriyanshii/mit-6.5840',
  },
  {
    type: 'project',
    title: 'VisionBoardIt',
    date: '',
    description: 'Vision boards of photos, notes, and emojis for personal goal-setting.',
    link: 'https://visionboardit.art',
  },
  {
    type: 'project',
    title: 'Recite',
    date: '',
    description:
      'A web app that helps students practise speeches, poems, and recitations with progress tracking.',
    link: 'https://www.recite.online/',
  },
  {
    type: 'project',
    title: 'Android Skill Router',
    date: '',
    description:
      'Turns natural language into reusable Android automation skills with a fine-tuned on-device model.',
    link: 'https://huggingface.co/spaces/build-small-hackathon/android-skill-router',
  },
];

export const projectsPageItems: ProjectItem[] = [
  {
    type: 'project',
    title: 'Serene',
    date: '',
    description:
      'A calm in-browser focus desk with a timer, tasks, notes, account sync and Pro billing, built solo from scratch. 66 users with no marketing.',
    link: 'https://sereneworkspace.xyz/',
  },
  {
    type: 'project',
    title: 'MapReduce, MIT 6.5840',
    date: '',
    description:
      "A distributed MapReduce in Go with a coordinator and workers, built for MIT's distributed systems course, with fault tolerance.",
    link: 'https://github.com/kriyanshii/mit-6.5840',
  },
  {
    type: 'project',
    title: 'Android Skill Router',
    date: '',
    description:
      'Turns natural language into reusable Android automation skills with a fine-tuned on-device model.',
    link: 'https://huggingface.co/spaces/build-small-hackathon/android-skill-router',
  },
  {
    type: 'project',
    title: 'Recite',
    date: '',
    description:
      'A web app that helps students practise speeches, poems, and recitations with progress tracking.',
    link: 'https://www.recite.online/',
  },
  {
    type: 'project',
    title: 'Shell',
    date: '',
    description: 'A minimalist Unix shell built from scratch in Go.',
    link: 'https://github.com/kriyanshii/shell-go',
  },
  {
    type: 'project',
    title: 'Grep',
    date: '',
    description: 'An implementation of the classic grep utility built from scratch in Go.',
    link: 'https://github.com/kriyanshii/grep-go',
  },
  {
    type: 'project',
    title: 'VisionBoardIt',
    date: '',
    description: 'Vision boards of photos, notes, and emojis for personal goal-setting.',
    link: 'https://visionboardit.art/',
  },
  {
    type: 'project',
    title: 'Wordle',
    date: '',
    description: 'A from-scratch Wordle implementation in TypeScript.',
    link: 'https://github.com/kriyanshii/wordle',
  },
  {
    type: 'project',
    title: 'Bubble Burst',
    date: '',
    description: 'A browser game where you pop bubbles as they appear on screen.',
    link: 'https://github.com/kriyanshii/bubble-burst',
  },
  {
    type: 'project',
    title: 'Rock Paper Scissors',
    date: '',
    description: 'A classic Rock-Paper-Scissors game in TypeScript.',
    link: 'https://github.com/kriyanshii/rock-paper-scissors',
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
    description: 'JupyterHub and Mercury for open science.',
    year: '2025',
    tag: 'Conference Talk',
    link: 'https://youtu.be/6o_XY5jBchY',
  },
];

export const opensourceHighlights: OpensourceHighlight[] = [
  {
    project: 'Temporal',
    summary: 'temporalio/helm-charts and temporalio/temporal-worker-controller.',
    bullets: [
      {
        status: 'merged',
        prs: [{ label: 'helm-charts #976', href: 'https://github.com/temporalio/helm-charts/pull/976' }],
        text: 'allow --defaultdb on the schema job (Oct 2026)',
      },
      {
        status: 'merged',
        prs: [
          {
            label: 'worker-controller #565',
            href: 'https://github.com/temporalio/temporal-worker-controller/pull/565',
          },
        ],
        text: 'generate values.schema.json from values.yaml (Oct 2026)',
      },
      {
        status: 'merged',
        prs: [
          {
            label: 'worker-controller #561',
            href: 'https://github.com/temporalio/temporal-worker-controller/pull/561',
          },
        ],
        text: 'fail CI when values.yaml changes without a schema update (Sep 2026)',
      },
      {
        status: 'merged',
        prs: [
          {
            label: 'worker-controller #558',
            href: 'https://github.com/temporalio/temporal-worker-controller/pull/558',
          },
        ],
        text: 'document extraEnv proxy usage and validate EnvVar shape (Aug 2026)',
      },
    ],
    links: [],
  },
  {
    project: 'Grafana k6',
    summary: 'grafana/k6.',
    bullets: [
      {
        status: 'merged',
        prs: [{ label: '#6561', href: 'https://github.com/grafana/k6/pull/6561' }],
        text: 'include the searched path when a local file cannot be found (Oct 2026)',
      },
    ],
    links: [],
  },
  {
    project: 'Dagu',
    summary: 'About 28 merged PRs on dagucloud/dagu.',
    bullets: [
      {
        status: 'merged',
        join: 'and',
        prs: [
          { label: '#3058', href: 'https://github.com/dagucloud/dagu/pull/3058' },
          { label: '#3059', href: 'https://github.com/dagucloud/dagu/pull/3059' },
        ],
        text: 'xlsx protected workbooks and whole-number column formatting (Oct 2026)',
      },
      {
        status: 'merged',
        prs: [{ label: '#2582', href: 'https://github.com/dagucloud/dagu/pull/2582' }],
        text: 'retry a step with its downstream steps (Aug 2026)',
      },
      {
        status: 'merged',
        prs: [
          { label: '#2454', href: 'https://github.com/dagucloud/dagu/pull/2454' },
          { label: '#2455', href: 'https://github.com/dagucloud/dagu/pull/2455' },
          { label: '#2456', href: 'https://github.com/dagucloud/dagu/pull/2456' },
        ],
        text: 'ps, rm and ls CLI commands (Aug 2026)',
      },
      {
        status: 'merged',
        prs: [{ label: '#2173', href: 'https://github.com/dagucloud/dagu/pull/2173' }],
        text: 'UI fix for eval-backed default params (May 2026)',
      },
      {
        status: 'merged',
        prs: [{ label: '#1676', href: 'https://github.com/dagucloud/dagu/pull/1676' }],
        text: 'scheduler respects global queue capacity on retry (Feb 2026)',
      },
      {
        status: 'merged',
        prs: [{ label: '#1613', href: 'https://github.com/dagucloud/dagu/pull/1613' }],
        text: 'production-ready Helm chart for Kubernetes (Feb 2026)',
      },
    ],
    links: [
      {
        label: 'All merged PRs',
        href: 'https://github.com/dagucloud/dagu/pulls?q=is%3Apr+author%3Akriyanshii+is%3Amerged',
      },
      {
        label: 'IndiaFOSS 2026 talk',
        href: 'https://fossunited.org/c/indiafoss/2026/cfp/8ne6l7qetc',
      },
    ],
  },
  {
    project: 'Argo Workflows',
    summary: 'argoproj/argo-workflows.',
    bullets: [
      {
        status: 'merged',
        prs: [{ label: '#16850', href: 'https://github.com/argoproj/argo-workflows/pull/16850' }],
        text: 'move concurrency fixtures into testdata (Sep 2026)',
      },
    ],
    links: [],
  },
  {
    project: 'Ray',
    summary: 'ray-project/ray.',
    bullets: [
      {
        status: 'merged',
        prs: [{ label: '#59425', href: 'https://github.com/ray-project/ray/pull/59425' }],
        text: 'fix crash when killing an actor handle from a previous session (Jan 2026)',
      },
      {
        status: 'merged',
        prs: [{ label: '#59507', href: 'https://github.com/ray-project/ray/pull/59507' }],
        text: 'handle dual task errors with read-only args (Jan 2026)',
      },
      {
        status: 'merged',
        prs: [{ label: '#60171', href: 'https://github.com/ray-project/ray/pull/60171' }],
        text: 'move datasource/datasink tests into a subfolder (Jan 2026)',
      },
      {
        status: 'merged',
        prs: [{ label: '#60481', href: 'https://github.com/ray-project/ray/pull/60481' }],
        text: 'fix a Grafana panel metric name (Jan 2026)',
      },
    ],
    links: [],
  },
];
