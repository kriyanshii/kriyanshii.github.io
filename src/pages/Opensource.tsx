import { Link } from 'react-router-dom';
import { PageSeo } from '../components/PageSeo';
import { DEFAULT_OG_IMAGE, SITE_URL } from '../constants/site';
import { opensourceHighlights } from '../data/portfolio';

export function Opensource() {
  return (
    <div className="max-w-2xl mx-auto px-6">
      <PageSeo
        title="Open Source"
        description="Open-source contributions — Dagu workflow engine, Ray distributed computing, and backend engineering in the OSS ecosystem."
        canonical={`${SITE_URL}/opensource`}
        ogImage={DEFAULT_OG_IMAGE}
      />

      <header className="mb-16">
        <h1 className="text-2xl font-medium mb-4 dark:text-white">Open Source</h1>
        <p className="text-[15px] leading-relaxed text-gray-800 dark:text-gray-300">
          Contributions to workflow orchestration, backend systems, and the broader OSS ecosystem — including
          PyData-adjacent infra work and distributed systems tooling.
        </p>
      </header>

      <div className="space-y-6">
        {opensourceHighlights.map((item) => (
          <article
            key={item.project}
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow"
          >
            <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">{item.project}</h2>
            <p className="text-[15px] text-gray-700 dark:text-gray-300 mb-4">{item.summary}</p>
            <div className="flex flex-wrap gap-4">
              {item.links.map((link) =>
                link.href.startsWith('/') ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
                  >
                    {link.label}
                  </a>
                ),
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
