import { ExternalLink } from 'lucide-react';
import { PageSeo } from '../components/PageSeo';
import { DEFAULT_OG_IMAGE, SITE_URL } from '../constants/site';
import { RESUME_URL } from '../data/portfolio';

export function Resume() {
  return (
    <div className="max-w-3xl mx-auto px-6">
      <PageSeo
        title="Resume"
        description="Resume of Kriyanshi — distributed systems, satellite data pipelines, JupyterHub platforms, and open-source contributions."
        canonical={`${SITE_URL}/resume`}
        ogImage={DEFAULT_OG_IMAGE}
      />

      <header className="mb-10">
        <h1 className="text-2xl font-medium mb-4 dark:text-white">Resume</h1>
        <p className="text-[15px] leading-relaxed text-gray-800 dark:text-gray-300">
          Backend and infra engineer working on satellite data systems, interactive computing platforms, and
          open-source workflow tooling.
        </p>
      </header>

      <a
        href={RESUME_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-sm transition-shadow dark:text-gray-200"
      >
        View resume (PDF)
        <ExternalLink size={14} />
      </a>
    </div>
  );
}
