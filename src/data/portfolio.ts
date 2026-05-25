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
    title: 'cloudraft',
    date: 'Jan, 2026',
    description:
      'working on migration of n8n workflows from Docker to self-managed Kubernetes, designing namespaces, deployments/statefulsets, services, ingress, configmaps, and secrets.',
    link: 'https://cloudraft.io',
    isNew: true,
  },
  {
    type: 'job',
    title: 'Space Application Center',
    date: 'Sep, 2023',
    description:
      "At the Space Applications Centre, ISRO, I've been fortunate to work on projects that bring space data closer to scientists and researchers:",
    link: '#',
    isNew: false,
    bulletPoints: [
      'Built systems to ingest and manage continuous streams of data from geostationary satellites, ensuring reliable scheduling and availability for downstream applications',
      'Developed JupyterHub-based platforms that empower planetary and meteorological researchers to run experiments, collaborate, and explore massive datasets in an interactive way.',
      'Created scheduling systems for automated satellite data processing workflows',
      "Recently started contributing to the customization of SeaDAS, NASA's toolkit for processing and analyzing Earth observation data",
    ],
  },
];

export const projectItems: ProjectItem[] = [
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
      '42+ commits across queue management, DAG run controls, search/filter UX, step timeouts, and API design.',
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
