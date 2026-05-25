import { AUTHOR_NAME, SITE_NAME, absoluteUrl } from '../constants/site';

export interface PageSeoProps {
  title: string;
  description: string;
  canonical: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  publishedTime?: string;
  author?: string;
  tag?: string;
}

export interface ArticleJsonLd {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  tag?: string;
}

export function formatPageTitle(pageTitle: string): string {
  return `${pageTitle} | ${SITE_NAME}`;
}

export function buildArticleJsonLd(article: ArticleJsonLd): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.description,
    url: article.url,
    datePublished: article.datePublished,
    dateModified: article.dateModified ?? article.datePublished,
    image: article.image,
    author: {
      '@type': 'Person',
      name: AUTHOR_NAME,
      url: absoluteUrl('/'),
    },
    publisher: {
      '@type': 'Person',
      name: AUTHOR_NAME,
      url: absoluteUrl('/'),
    },
    ...(article.tag ? { articleSection: article.tag } : {}),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
  };
}

type ManagedTag = { element: HTMLMetaElement | HTMLLinkElement; created: boolean };

function upsertMeta(name: string, content: string, property = false): ManagedTag {
  const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  let created = false;

  if (!element) {
    element = document.createElement('meta');
    if (property) {
      element.setAttribute('property', name);
    } else {
      element.setAttribute('name', name);
    }
    document.head.appendChild(element);
    created = true;
  }

  element.setAttribute('content', content);
  return { element, created };
}

function upsertLink(rel: string, href: string): ManagedTag {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  let created = false;

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
    created = true;
  }

  element.setAttribute('href', href);
  return { element, created };
}

function upsertJsonLd(id: string, data: Record<string, unknown>): HTMLScriptElement {
  let element = document.head.querySelector<HTMLScriptElement>(`script[data-seo-id="${id}"]`);
  if (!element) {
    element = document.createElement('script');
    element.type = 'application/ld+json';
    element.setAttribute('data-seo-id', id);
    document.head.appendChild(element);
  }
  element.textContent = JSON.stringify(data);
  return element;
}

export function applyPageSeo(seo: PageSeoProps): () => void {
  const previousTitle = document.title;
  document.title = formatPageTitle(seo.title);

  const managedTags: ManagedTag[] = [
    upsertMeta('description', seo.description),
    upsertLink('canonical', seo.canonical),
    upsertMeta('og:title', seo.title, true),
    upsertMeta('og:description', seo.description, true),
    upsertMeta('og:url', seo.canonical, true),
    upsertMeta('og:type', seo.ogType ?? 'website', true),
    upsertMeta('og:locale', 'en_US', true),
    upsertMeta('twitter:card', 'summary_large_image'),
    upsertMeta('twitter:title', seo.title),
    upsertMeta('twitter:description', seo.description),
  ];

  if (seo.ogImage) {
    managedTags.push(
      upsertMeta('og:image', seo.ogImage, true),
      upsertMeta('twitter:image', seo.ogImage),
    );
  }

  if (seo.publishedTime) {
    managedTags.push(upsertMeta('article:published_time', seo.publishedTime, true));
  }

  if (seo.author) {
    managedTags.push(upsertMeta('article:author', seo.author, true));
  }

  if (seo.tag) {
    managedTags.push(upsertMeta('article:section', seo.tag, true));
  }

  const jsonLdId = 'page-seo-jsonld';
  const jsonLdElement = seo.ogType === 'article'
    ? upsertJsonLd(jsonLdId, buildArticleJsonLd({
        title: seo.title,
        description: seo.description,
        url: seo.canonical,
        datePublished: seo.publishedTime ?? new Date().toISOString().split('T')[0],
        image: seo.ogImage,
        tag: seo.tag,
      }))
    : null;

  return () => {
    document.title = previousTitle;
    managedTags.forEach(({ element, created }) => {
      if (created) {
        element.remove();
      }
    });
    jsonLdElement?.remove();
  };
}
