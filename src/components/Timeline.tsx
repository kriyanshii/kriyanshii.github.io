import type { ReactNode } from 'react';
import { ProjectItem } from '../types';

function isExternal(href: string) {
  return href.startsWith('http');
}

function ItemLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  if (isExternal(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

interface TimelineProps {
  items: ProjectItem[];
  title?: string;
}

export function Timeline({ items, title }: TimelineProps) {
  return (
    <section className="mb-14">
      {title && (
        <h2 className="mb-8 text-xs font-medium uppercase tracking-[0.18em] text-gray-500 dark:text-gray-500">
          {title}
        </h2>
      )}

      <div className="relative">
        <div className="absolute left-[5px] top-2 bottom-2 w-px bg-gray-200 dark:bg-gray-700" />

        <div className="space-y-10">
          {items.map((item) => {
            const tech = item.stack?.length ? item.stack : undefined;
            const statusLabel = item.isNew
              ? item.type === 'job'
                ? 'current'
                : 'active'
              : null;
            const bullets =
              item.type === 'project' && item.bulletPoints && item.bulletPoints.length > 2
                ? item.bulletPoints.slice(0, 2)
                : item.bulletPoints;

            return (
              <article key={`${item.title}-${item.date}`} className="relative pl-8">
                <div
                  className={`absolute left-0 top-[7px] h-[11px] w-[11px] rounded-full border-2 bg-[#fafafa] dark:bg-[#1a1a1a] ${
                    item.isNew
                      ? 'border-blue-500 shadow-[0_0_0_3px_rgba(59,130,246,0.15)]'
                      : 'border-gray-300 dark:border-gray-600'
                  }`}
                />

                <div className="mb-1 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  {statusLabel && (
                    <span className="rounded px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300">
                      {statusLabel}
                    </span>
                  )}
                  {item.link ? (
                    <ItemLink
                      href={item.link}
                      className="text-[15px] font-medium text-gray-900 transition-colors hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
                    >
                      {item.title}
                    </ItemLink>
                  ) : (
                    <h3 className="text-[15px] font-medium text-gray-900 dark:text-gray-100">
                      {item.title}
                    </h3>
                  )}
                </div>

                <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                  {item.role ? (
                    <p className="text-[13px] text-gray-600 dark:text-gray-400">{item.role}</p>
                  ) : (
                    <span />
                  )}
                  <p className="shrink-0 text-xs text-gray-500 dark:text-gray-500">{item.date}</p>
                </div>

                {tech && tech.length > 0 && (
                  <p className="mb-2.5 text-[11px] leading-relaxed text-gray-500 dark:text-gray-500">
                    {tech.join(' · ')}
                  </p>
                )}

                {!bullets?.length && item.description && (
                  <p className="text-[13px] leading-relaxed text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                )}

                {bullets && bullets.length > 0 && (
                  <ul className="mt-1 space-y-1.5">
                    {bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2 text-[13px] leading-relaxed text-gray-600 dark:text-gray-400"
                      >
                        <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-gray-400 dark:bg-gray-500" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {item.links && item.links.length > 0 && (
                  <div className="mt-2.5 flex flex-wrap gap-x-3 gap-y-1">
                    {item.links.map((link) => (
                      <ItemLink
                        key={link.href}
                        href={link.href}
                        className="text-xs text-gray-500 transition-colors hover:text-blue-600 dark:text-gray-500 dark:hover:text-blue-400"
                      >
                        {link.label}
                      </ItemLink>
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
