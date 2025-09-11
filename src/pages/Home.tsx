import { Github, Twitter } from "lucide-react";
import { ProjectItem } from "../types";
import { Timeline } from "../components/Timeline";

export function Home() {
	const workItems: ProjectItem[] = [
		{
			type: "job",
			title: "Space Application Center",
			date: "Sep, 2023",
			description:
				"At the Space Applications Centre, ISRO, I've been fortunate to work on projects that bring space data closer to scientists and researchers:",
			link: "#",
			isNew: true,
			bulletPoints: [
				"Built systems to ingest and manage continuous streams of data from geostationary satellites, ensuring reliable scheduling and availability for downstream applications",
				"Developed JupyterHub-based platforms that empower planetary and meteorological researchers to run experiments, collaborate, and explore massive datasets in an interactive way.",
				"Created scheduling systems for automated satellite data processing workflows",
				"Recently started contributing to the customization of SeaDAS, NASA’s toolkit for processing and analyzing Earth observation data"
			],
		},
	];
	const projectItems: ProjectItem[] = [
		{
			type: "project",
			title: "dagu",
			date: "Sep 8, 2025",
			description:
				"I actively contribute to Dagu, an open-source workflow engine, where I worked on both core features and usability improvements. My contributions include implementing enqueue logic for batch processing, adding custom exit-code based retry handling, introducing zoom support in DAG visualizations, and building controlled execution configs to lock parameters for reproducible runs. I also fixed frontend build issues, improving the stability of the development workflow.",
			link: "https://github.com/dagu-org/dagu/pulls?q=is:pr+author:kriyanshii",
			tags: ["opensource"],
		},
		{
		  type: "project",
		  title: "MapReduce",
		  date: "Jan 23, 2025",
		  description:
			"Implemented the MapReduce paper from MIT's Distributed Systems course (MIT 6.5840) in Go, gaining hands-on experience in parallel data processing, distributed computing, and fault tolerance.",
		  link: "https://github.com/kriyanshii/mit-6.5840",
		  tags: ["from scratch"],
		},
		{
		  type: "project",
		  title: "Shell",
		  date: "Dec 30, 2024",
		  description:
			"A minimalist implementation of a Unix shell built from scratch in Go.",
		  link: "https://github.com/kriyanshii/shell-go",
		  tags: ["from scratch"],
		},
		{
		  type: "project",
		  title: "Grep",
		  date: "Feb 5, 2025",
		  description:
			"An implementation of the classic grep utility built from scratch in Go.",
		  link: "https://github.com/kriyanshii/grep-go",
		  tags: ["from scratch"],
		},
		{
		  type: "project",
		  title: "Serene",
		  date: "Feb 2025",
		  description:
			"A personalized productivity tool to help manage and complete day-to-day tasks. Built with a clean and simple UI.",
		  link: "https://sereneworkspace.netlify.app/",
		  isNew: true,
		  tags: ["tools"],
		},
		{
		  type: "project",
		  title: "Rock Paper Scissors",
		  date: "Nov 2024",
		  description:
			"An implementation of the classic Rock-Paper-Scissors game in TypeScript.",
		  link: "https://github.com/kriyanshii/rock-paper-scissors",
		  tags: ["games"],
		},
		{
		  type: "project",
		  title: "Bubble Burst",
		  date: "Dec 2024",
		  description:
			"A fun browser-based game where you pop all the bubbles that appear on the screen.",
		  link: "https://github.com/kriyanshii/bubble-burst",
		  isNew: true,
		  tags: ["games"],
		},
		{
		  type: "project",
		  title: "Wordle",
		  date: "Jan 2025",
		  description:
			"A from-scratch implementation of the popular Wordle game using TypeScript.",
		  link: "https://github.com/kriyanshii/wordle",
		  tags: ["games"],
		},
	];
	  

	return (
		<div className="max-w-3xl mx-auto px-6">
			<header className="mb-10 flex sm:flex-row  sm:justify-between items-center">
					<p className="text-[15px] leading-relaxed text-gray-800 dark:text-gray-300 mb-4">
					I’m a software engineer at ISRO’s Space Applications Centre, where I get to play with satellites (well, their data at least 🚀). I’ve built tools that ingest and schedule data from geostationary satellites and crafted interactive environments with JupyterHub to make planetary and weather research a lot more hands-on.

Right now, I’m diving into SeaDAS, NASA’s go-to toolkit for processing and analyzing Earth observation data — tweaking it, customizing it, and making sure scientists can get the most out of satellite snapshots of our planet 🌍✨.					</p>
					<div>
						<a
							href="https://github.com/kriyanshii"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
							<Github size={18} />
						</a>
						<a
							href="https://x.com/kriyanshii"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
							<Twitter size={18} />
						</a>
					</div>
			</header>
			<Timeline items={workItems} title="work" />
			<Timeline items={projectItems} title="projects" />
		</div>
	);
}
