import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RESUME_URL } from '../data/portfolio';

export function OpenToWorkNote({ className = '' }: { className?: string }) {
  return (
    <aside className={`border-t border-gray-100 pt-8 dark:border-gray-800 ${className}`.trim()}>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-medium text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
          Open to work
        </span>
        <span className="text-[12px] text-gray-500 dark:text-gray-500">
          Backend &amp; systems roles
        </span>
      </div>
      <p className="mb-4 max-w-xl text-[13px] leading-relaxed text-gray-600 dark:text-gray-400">
        I&apos;m Kriyanshi — a backend and systems engineer working on satellite data pipelines,
        workflow orchestration, and production infrastructure. Previously at ISRO&apos;s Space
        Applications Centre; currently shipping at Matrix Business and contributing upstream to
        Dagu.
      </p>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px]">
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
        >
          Resume
          <ArrowUpRight size={12} />
        </a>
        <Link
          to="/"
          className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
        >
          About
        </Link>
        <a
          href="https://github.com/kriyanshii"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
        >
          GitHub
        </a>
      </div>
    </aside>
  );
}
