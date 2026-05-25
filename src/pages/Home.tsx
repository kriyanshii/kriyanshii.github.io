import { Github, Twitter, Presentation } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageSeo } from '../components/PageSeo';
import { DEFAULT_DESCRIPTION, DEFAULT_OG_IMAGE, SITE_TAGLINE, SITE_URL } from '../constants/site';
import { projectItems, talkItems, workItems } from '../data/portfolio';
import { Timeline } from '../components/Timeline';

export function Home() {
  return (
    <div className="max-w-3xl mx-auto px-6">
      <PageSeo
        title={SITE_TAGLINE}
        description={DEFAULT_DESCRIPTION}
        canonical={`${SITE_URL}/`}
        ogImage={DEFAULT_OG_IMAGE}
      />
      <header className="mb-10 flex flex-col sm:flex-row gap-6 sm:justify-between sm:items-start">
        <p className="text-[15px] leading-relaxed text-gray-800 dark:text-gray-300">
          I work at the intersection of satellites, distributed systems, and the teams who need their data on
          time. At ISRO’s Space Applications Centre, I build ingestion, scheduling, and processing pipelines for
          geostationary satellite data and design JupyterHub environments that make planetary and weather
          research more accessible. I like running production and development setups on air-gapped and on-prem
          systems end to end—from build to deployment; it’s my guilty pleasure. Lately, I’ve been exploring and
          customizing SeaDAS to help scientists get more out of Earth observation data. 🌍✨
        </p>
        <div className="flex flex-col gap-3 shrink-0">
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
          <Link
            to="/talks"
            className="text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            <Presentation size={18} />
          </Link>
        </div>
      </header>
      <Timeline items={workItems} title="work" />
      <Timeline items={projectItems} title="projects" />

      <section className="mt-16">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100">talks</h2>
          <Link
            to="/talks"
            className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            View all
          </Link>
        </div>
        <div className="space-y-4">
          {talkItems.slice(0, 1).map((talk) => (
            <div
              key={talk.link}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">{talk.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{talk.description}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500">
                    <span className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">
                      {talk.tag}
                    </span>
                    <span>{talk.year}</span>
                  </div>
                </div>
                <a
                  href={talk.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                >
                  <Presentation size={16} />
                  Watch Talk
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
