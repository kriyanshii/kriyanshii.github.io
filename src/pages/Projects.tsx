import { PageSeo } from '../components/PageSeo';
import { DEFAULT_OG_IMAGE, SITE_URL } from '../constants/site';
import { projectItems } from '../data/portfolio';
import { Timeline } from '../components/Timeline';

export function Projects() {
  return (
    <div className="max-w-2xl mx-auto px-6 pb-20">
      <PageSeo
        title="Projects"
        description="Side projects, open-source work, and systems built from scratch — distributed systems, tools, and interactive computing."
        canonical={`${SITE_URL}/projects`}
        ogImage={DEFAULT_OG_IMAGE}
      />

      <header className="mb-12">
        <h1 className="mb-3 text-2xl font-medium dark:text-white">Projects</h1>
        <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-400">
          Things I&apos;ve built or contributed to — from workflow engines and MapReduce implementations to
          tools and games.
        </p>
      </header>

      <Timeline items={projectItems} />
    </div>
  );
}
