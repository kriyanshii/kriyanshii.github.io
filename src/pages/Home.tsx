import { Github, Twitter } from 'lucide-react';
import { ProjectItem } from '../types';
import { Timeline } from '../components/Timeline';

export function Home() {
    const workItems: ProjectItem[] = [
        {
            type: 'job',
            title: 'Space Application Center',
            date: 'Sep, 2023',
            description: 'backend engineering and  setting up a base station for INSAT-3DS at SAC bopal and IMD, Delhi. Working on creating a dag based scheduler in go which generates images from sateliete rawdata',  
            link: '#',
            isNew: true
        },]
    const opensourceItems: ProjectItem[] = [
        {
            type: 'project',
            title: 'dagu',
            date: 'Feb 5, 2025',
            description: 'it is a cron/Airflow alternative, but with much more capabilities. i have contributed in adding various features like improved parameter handling, supporting queue and batch processing, improved history data.', 
            link: 'https://github.com/dagu-org/dagu/pulls?q=is:pr+author:kriyanshii',
        },
    ]
  const projectItems: ProjectItem[] = [
    {
      type: 'project',
      title: 'grep',
      date: 'Feb 5, 2025',
      description: 'A minimalist implementation of grep functionality built with Go', 
      link: 'https://github.com/kriyanshii/grep-go',
    },
    {
      type: 'project',
      title: 'shell',
      date: 'December 30, 2024',
      description: 'A minimalist implementation of shell built with Go',
      link: 'https://github.com/kriyanshii/shell-go',
    },
    {
      type: 'project',
      title: 'mapreduce',
      date: 'Jan 23, 2025',
      description: 'implemented the MapReduce paper from MIT\'s Distributed Systems course (MIT 6.5840), gaining hands-on experience in parallel data processing. This project deepened my understanding of distributed computing and fault tolerance.',
      link: 'https://github.com/kriyanshii/mit-6.5840',
      isNew: true
    }
  ]


  return (
    <div className="max-w-3xl mx-auto px-6">
      <header className="mb-16">
        <p className="text-[15px] leading-relaxed text-gray-800 dark:text-gray-300 mb-4">
        a software engineer who loves writing efficient Go code. Currently, I'm deep into crafting an interpreter (Code Crafters) and exploring distributed systems (MIT 6.824). Right now, I'm building duckGPT—a tool that listens to spoken answers, just like your mom used to, and checks your knowledge on any given subject!"
        </p>
        <div className="flex gap-4">
          <a 
            href="https://github.com/kriyanshii" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            <Github size={18} />
          </a>
          <a 
            href="https://x.com/kriyanshii" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            <Twitter size={18} />
          </a>
        </div>
      </header>
      <Timeline items={workItems} title='work'/>
      <Timeline items={projectItems} title='projects' />
        <Timeline items={opensourceItems} title='opensource contributions' />
    </div>
  );
}