import { Presentation } from 'lucide-react';
import { PageSeo } from '../components/PageSeo';
import { DEFAULT_OG_IMAGE, SITE_URL } from '../constants/site';
import { talkItems } from '../data/portfolio';

export function Talks() {
  return (
    <div className="max-w-3xl mx-auto px-6">
      <PageSeo
        title="Talks"
        description="Conference talks and live sessions on JupyterHub, interactive computing, and backend systems for research teams."
        canonical={`${SITE_URL}/talks`}
        ogImage={DEFAULT_OG_IMAGE}
      />

      <header className="mb-16">
        <h1 className="text-2xl font-medium mb-4 dark:text-white">Talks</h1>
        <p className="text-[15px] leading-relaxed text-gray-800 dark:text-gray-300">
          Presentations on interactive computing environments, open science infrastructure, and backend
          engineering for research teams.
        </p>
      </header>

      <div className="space-y-4">
        {talkItems.map((talk) => (
          <div
            key={talk.link}
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">{talk.title}</h2>
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
                className="shrink-0 flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              >
                <Presentation size={16} />
                Watch
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
