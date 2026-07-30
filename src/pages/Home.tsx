import { Github, Twitter, Presentation } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageSeo } from '../components/PageSeo';
import { Timeline } from '../components/Timeline';
import { DEFAULT_DESCRIPTION, DEFAULT_OG_IMAGE, SITE_TAGLINE, SITE_URL } from '../constants/site';
import { projectItems, talkItems, workItems } from '../data/portfolio';

export function Home() {
  return (
    <div className="max-w-2xl mx-auto px-6 pb-20">
      <PageSeo
        title={SITE_TAGLINE}
        description={DEFAULT_DESCRIPTION}
        canonical={`${SITE_URL}/`}
        ogImage={DEFAULT_OG_IMAGE}
      />

      <header className="mb-10">
        <h1 className="font-serif text-3xl text-gray-900 dark:text-white mb-2">Kriyanshi</h1>
        <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-400 mb-4">
          Backend &amp; systems engineer working on satellite data pipelines, workflow orchestration, and
          production infrastructure. Currently at Matrix Business.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/kriyanshii"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-200 transition-colors"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="https://x.com/kriyanshii"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-200 transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={16} />
          </a>
          <Link
            to="/talks"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-200 transition-colors"
            aria-label="Talks"
          >
            <Presentation size={16} />
          </Link>
        </div>
      </header>

      <Timeline
        items={workItems}
        title="experience"
        badge={
          <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-medium text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
            Open to work
          </span>
        }
      />
      <Timeline items={projectItems} title="projects" />

      <section>
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-gray-500 dark:text-gray-500">
            talks
          </h2>
          <Link
            to="/talks"
            className="text-xs text-gray-500 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
          >
            View all
          </Link>
        </div>
        <div className="space-y-6">
          {talkItems.slice(0, 1).map((talk) => (
            <article key={talk.link}>
              <div className="mb-1 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-[15px] font-medium text-gray-900 dark:text-gray-100">{talk.title}</h3>
                <span className="text-xs text-gray-500">{talk.year}</span>
              </div>
              <p className="mb-2 text-[13px] leading-relaxed text-gray-600 dark:text-gray-400">
                {talk.description}
              </p>
              <a
                href={talk.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-500 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
              >
                Watch talk
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
