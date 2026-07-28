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
    date: '2025 — Present',
    description:
      'Built and deployed a production self-service Background Verification (BGV) platform, owning backend architecture, customer onboarding, verification workflows, and production deployment from design to launch.',
    isNew: true,
    highlights: [
      'Production SaaS',
      'FastAPI Backend',
      'BFF Architecture',
      'Docker Deployment',
      'Payment Integration',
    ],
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
    date: 'Ongoing',
    description:
      'Built products, contributed to open-source infrastructure, and explored distributed systems through independent engineering work.',
    link: '/opensource',
    highlights: [
      'Open Source',
      'Dagu',
      'Ray',
      'AI Products',
      'Distributed Systems',
    ],
    bulletPoints: [
      'Became one of the leading contributors to Dagu, implementing workflow orchestration features across the Go backend and React frontend.',
      'Contributed to the Ray ecosystem while exploring distributed execution and large-scale compute orchestration.',
      'Built Recite Online, an educational platform designed to help students practice and memorize speeches and recitations.',
      'Developed Serenity Workspace, a productivity application focused on structured planning and personal knowledge management.',
      'Built AI-powered applications using Retrieval-Augmented Generation (RAG), OpenAI APIs, and modern backend architectures.',
      'Strengthened expertise in Kubernetes, distributed systems, and platform engineering through production deployments and open-source collaboration.',
    ],
  },
  {
    type: 'job',
    title: 'Space Applications Centre (ISRO)',
    date: 'Sep 2023 — Present',
    description:
      'Delivered mission-critical distributed workflow systems supporting geostationary weather satellite processing.',
    highlights: [
      'Distributed Workflows',
      'Satellite Processing',
      'Air-gapped Infra',
      'Scientific Computing',
      'Production Reliability',
    ],
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
    title: 'Android Skill Router',
    date: 'Jun 16, 2026',
    description:
      'A lightweight AI system that converts natural language into reusable Android automation skills using a fine-tuned 3B language model and recorded UI trajectories. Built as an exploration of efficient on-device AI and workflow automation.',
    link: 'https://huggingface.co/spaces/build-small-hackathon/android-skill-router',
    isNew: true,
    tags: ['tools'],
    highlights: [
      'Fine-tuned 3B',
      'QLoRA',
      'Synthetic Dataset',
      'UI Trajectories',
      'HF Spaces Demo',
    ],
    bulletPoints: [
      'Fine-tuned Qwen2.5-3B using QLoRA (Unsloth) on Modal.',
      'Generated a synthetic intent dataset for Android automation.',
      'Built an end-to-end inference pipeline from prompt to executable UI trajectory.',
      'Deployed an interactive demo on Hugging Face Spaces.',
      'Explored modular AI architectures that separate language understanding from UI execution.',
    ],
    stack: [
      'Python',
      'Qwen2.5-3B',
      'Unsloth',
      'Modal',
      'Gradio',
      'Hugging Face Spaces',
      'Kotlin',
      'Android Accessibility',
    ],
    links: [
      {
        label: 'Read the technical write-up',
        href: '/blog/android-skill-router',
      },
      {
        label: 'Try the live demo',
        href: 'https://huggingface.co/spaces/build-small-hackathon/android-skill-router',
      },
    ],
  },
  {
    type: 'project',
    title: 'Recite Online',
    date: '2025',
    description:
      'Helping students build confidence through guided recitation and practice. A web application designed to help students practise speeches, poems, and recitations independently — with an interactive environment for rehearsing content, tracking progress, and improving confidence without a teacher or partner for every session.',
    link: 'https://www.recite.online/',
    isNew: true,
    tags: ['tools'],
    highlights: [
      'Self-paced Learning',
      'Progress Tracking',
      'Responsive UI',
      'Full-stack App',
      'User Feedback',
    ],
    bulletPoints: [
      'Designed and built a complete web application focused on self-paced learning.',
      'Developed an intuitive interface that makes practising recitations simple and distraction-free.',
      'Built features to support repeated practice, progress tracking, and a consistent learning experience.',
      'Focused on creating a responsive and accessible experience across desktop and mobile devices.',
      'Iterated on the product based on user feedback to improve usability and engagement.',
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
    links: [
      {
        label: 'Live Demo',
        href: 'https://www.recite.online/',
      },
    ],
  },
  {
    type: 'project',
    title: 'VisionBoardIt',
    date: 'Dec 17, 2025',
    description:
      'Create beautiful vision boards with photos, notes, and emojis. Bring your dreams to life with Japanese-inspired elegance.',
    link: 'https://visionboardit.art/?ref=producthunt',
    isNew: true,
    tags: ['tools'],
  },
  {
    type: 'project',
    title: 'dagu',
    date: 'Sep 8, 2025',
    description:
      'I actively contribute to Dagu, an open-source workflow engine, where I worked on both core features and usability improvements. My contributions include implementing enqueue logic for batch processing, adding custom exit-code based retry handling, introducing zoom support in DAG visualizations, and building controlled execution configs to lock parameters for reproducible runs. I also fixed frontend build issues, improving the stability of the development workflow.',
    link: 'https://github.com/dagu-org/dagu/commits/main/?author=kriyanshii',
    tags: ['opensource'],
  },
  {
    type: 'project',
    title: 'MapReduce',
    date: 'Jan 23, 2025',
    description:
      "Implemented the MapReduce paper from MIT's Distributed Systems course (MIT 6.5840) in Go, gaining hands-on experience in parallel data processing, distributed computing, and fault tolerance.",
    link: 'https://github.com/kriyanshii/mit-6.5840',
    tags: ['from scratch'],
  },
  {
    type: 'project',
    title: 'Shell',
    date: 'Dec 30, 2024',
    description: 'A minimalist implementation of a Unix shell built from scratch in Go.',
    link: 'https://github.com/kriyanshii/shell-go',
    tags: ['from scratch'],
  },
  {
    type: 'project',
    title: 'Grep',
    date: 'Feb 5, 2025',
    description: 'An implementation of the classic grep utility built from scratch in Go.',
    link: 'https://github.com/kriyanshii/grep-go',
    tags: ['from scratch'],
  },
  {
    type: 'project',
    title: 'Serene',
    date: 'Feb 2025',
    description:
      'A personalized productivity tool to help manage and complete day-to-day tasks. Built with a clean and simple UI.',
    link: 'https://sereneworkspace.netlify.app/',
    isNew: true,
    tags: ['tools'],
  },
  {
    type: 'project',
    title: 'Rock Paper Scissors',
    date: 'Nov 2024',
    description: 'An implementation of the classic Rock-Paper-Scissors game in TypeScript.',
    link: 'https://github.com/kriyanshii/rock-paper-scissors',
    tags: ['games'],
  },
  {
    type: 'project',
    title: 'Bubble Burst',
    date: 'Dec 2024',
    description: 'A fun browser-based game where you pop all the bubbles that appear on the screen.',
    link: 'https://github.com/kriyanshii/bubble-burst',
    isNew: true,
    tags: ['games'],
  },
  {
    type: 'project',
    title: 'Wordle',
    date: 'Jan 2025',
    description: 'A from-scratch implementation of the popular Wordle game using TypeScript.',
    link: 'https://github.com/kriyanshii/wordle',
    tags: ['games'],
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
