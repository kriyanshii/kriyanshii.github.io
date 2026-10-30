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

function BulletText({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  const pattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) nodes.push(text.slice(lastIndex, match.index));
    const [, label, href] = match;
    nodes.push(
      <ItemLink
        key={`${href}-${match.index}`}
        href={href}
        className="underline decoration-gray-300 underline-offset-2 transition-colors hover:text-blue-600 dark:decoration-gray-600 dark:hover:text-blue-400"
      >
        {label}
      </ItemLink>,
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex === 0) return text;
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return <>{nodes}</>;
}

interface TimelineProps {
  items: ProjectItem[];
  title?: string;
  badge?: ReactNode;
  footer?: ReactNode;
  append?: ReactNode;
  titleLinksOnly?: boolean;
}

export function Timeline({ items, title, badge, footer, append, titleLinksOnly }: TimelineProps) {
  return (
    <section className="mb-12">
      {(title || badge) && (
        <div className="mb-6 flex flex-wrap items-center gap-3">
          {title && (
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-500">
              {title}
            </h2>
          )}
          {badge}
        </div>
      )}

      <div className="relative">
        <div className="absolute left-[4px] top-2 bottom-2 w-px bg-gray-200 dark:bg-gray-700" />

        <div className="space-y-8">
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

            const body = (
              <>
                <div className="mb-1.5 flex items-start justify-between gap-4">
                  <div className="flex min-w-0 flex-wrap items-center gap-2">
                    {statusLabel && (
                      <span className="shrink-0 rounded px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                        {statusLabel}
                      </span>
                    )}
                    {titleLinksOnly && item.link ? (
                      <h3 className="text-[15px] font-medium leading-snug">
                        <ItemLink
                          href={item.link}
                          className="text-gray-900 transition-colors hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
                        >
                          {item.title}
                        </ItemLink>
                      </h3>
                    ) : item.link && item.links?.length ? (
                      <ItemLink
                        href={item.link}
                        className="text-[15px] font-medium leading-snug text-gray-900 transition-colors hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
                      >
                        {item.title}
                      </ItemLink>
                    ) : (
                      <h3 className="text-[15px] font-medium leading-snug text-gray-900 dark:text-gray-100">
                        {item.title}
                      </h3>
                    )}
                  </div>
                  {item.date ? (
                    <p className="shrink-0 pt-0.5 text-xs text-gray-500 dark:text-gray-500">
                      {item.date}
                    </p>
                  ) : null}
                </div>

                {item.role && (
                  <p className="mb-2 text-[13px] text-gray-600 dark:text-gray-400">{item.role}</p>
                )}

                {tech && tech.length > 0 && (
                  <div className="mb-2.5 flex flex-wrap gap-1.5">
                    {tech.map((tag) => (
                      <span
                        key={tag}
                        className="rounded px-2 py-0.5 text-[11px] bg-gray-100 text-gray-600 dark:bg-[#252525] dark:text-blue-200/90"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {item.description && (item.type === 'job' || !bullets?.length) && (
                  <p className="mb-2.5 text-[13px] leading-relaxed text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                )}

                {bullets && bullets.length > 0 && (
                  <ul className="space-y-1.5">
                    {bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2.5 text-[13px] leading-relaxed text-gray-600 dark:text-gray-400"
                      >
                        <span className="mt-[8px] h-1 w-1 shrink-0 rounded-full bg-gray-400 dark:bg-gray-500" />
                        <span>
                          <BulletText text={bullet} />
                        </span>
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
              </>
            );

            const wrapWholeCard = Boolean(item.link && !item.links?.length && !titleLinksOnly);

            return (
              <article key={`${item.title}-${item.date}`} className="group relative pl-7">
                <div
                  className={`absolute left-0 top-[8px] h-2 w-2 rounded-full border-2 bg-[#fafafa] dark:bg-[#1a1a1a] ${
                    item.isNew
                      ? 'border-blue-500 bg-blue-500 dark:bg-blue-500'
                      : 'border-gray-300 dark:border-gray-600'
                  }`}
                />

                {wrapWholeCard ? (
                  <ItemLink
                    href={item.link!}
                    className="block transition-colors group-hover:[&_h3]:text-blue-600 dark:group-hover:[&_h3]:text-blue-400"
                  >
                    {body}
                  </ItemLink>
                ) : (
                  body
                )}
              </article>
            );
          })}
          {append}
        </div>
      </div>
      {footer ? <div className="mt-6 pl-7">{footer}</div> : null}
    </section>
  );
}
