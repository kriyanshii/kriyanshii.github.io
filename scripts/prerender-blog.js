#!/usr/bin/env node
/**
 * Pre-renders static HTML for blog routes so crawlers and social
 * preview bots receive full meta tags and readable article content.
 */

import { readFileSync, readdirSync, mkdirSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import frontMatter from 'front-matter';
import { renderMarkdown, stripLeadingH1 } from './lib/markdown.mjs';
import { normalizeDate } from './lib/dates.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE_URL = 'https://kriyanshii.github.io';
const AUTHOR_NAME = 'Kriyanshi';
const DIST_DIR = join(__dirname, '..', 'dist');
const BLOG_DIR = join(__dirname, '..', 'src', 'content', 'blog');

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildArticleJsonLd(post, url, image) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    url,
    datePublished: post.date,
    dateModified: post.date,
    image,
    author: {
      '@type': 'Person',
      name: AUTHOR_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Person',
      name: AUTHOR_NAME,
      url: SITE_URL,
    },
    articleSection: post.tag,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };
}

function buildHeadMeta({ title, description, canonical, ogType, ogImage, publishedTime, tag, jsonLd }) {
  return `
    <title>${escapeHtml(title)} | ${AUTHOR_NAME}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:type" content="${ogType}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:image" content="${ogImage}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${ogImage}" />
    ${publishedTime ? `<meta property="article:published_time" content="${publishedTime}" />` : ''}
    ${tag ? `<meta property="article:section" content="${escapeHtml(tag)}" />` : ''}
    <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`;
}

function extractHeadAssets(indexHtml) {
  const headMatch = indexHtml.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
  const bodyMatch = indexHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (!headMatch || !bodyMatch) {
    throw new Error('Could not parse dist/index.html');
  }

  const head = headMatch[1]
    .replace(/<title>[\s\S]*?<\/title>/i, '')
    .replace(/<meta name="description"[^>]*>/gi, '')
    .replace(/<meta name="author"[^>]*>/gi, '')
    .replace(/<meta name="twitter:[^"]+"[^>]*>/gi, '')
    .replace(/<meta property="og:[^"]+"[^>]*>/gi, '')
    .replace(/<link rel="canonical"[^>]*>/gi, '')
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/gi, '')
    .replace(/<!-- Open Graph -->[\s\S]*?<!-- JSON-LD:[\s\S]*?<\/script>/i, '');

  const body = bodyMatch[1];
  return { headAssets: head.trim(), bodyAssets: body.trim() };
}

function buildStaticPage({ headAssets, bodyAssets, pageMeta, mainContent }) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
${pageMeta}
${headAssets}
    <style>
      .static-blog { max-width: 48rem; margin: 0 auto; padding: 4rem 1.5rem; font-family: system-ui, sans-serif; line-height: 1.7; color: #374151; }
      .static-blog h1 { font-size: 1.875rem; font-weight: 500; margin-bottom: 1.5rem; color: #111827; }
      .static-blog h2 { font-size: 1.25rem; font-weight: 500; margin: 2rem 0 1rem; color: #111827; }
      .static-blog p { margin-bottom: 1.25rem; }
      .static-blog a { color: #2563eb; }
      .static-blog figcaption { font-size: 0.875rem; color: #6b7280; margin: 0.5rem 0 1.5rem; font-style: italic; }
      .static-blog .mermaid-figure { margin: 1.5rem 0; padding: 1rem; background: #f9fafb; border-radius: 0.5rem; }
    </style>
  </head>
  <body>
    <noscript>
      <main class="static-blog">
        ${mainContent}
      </main>
    </noscript>
    ${bodyAssets}
  </body>
</html>`;
}

function loadPosts() {
  if (!existsSync(BLOG_DIR)) return [];

  return readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const slug = file.replace(/\.md$/, '');
      const raw = readFileSync(join(BLOG_DIR, file), 'utf8');
      const { attributes, body } = frontMatter(raw);
      const html = stripLeadingH1(renderMarkdown(body));

      return {
        slug,
        title: attributes.title,
        date: normalizeDate(attributes.date),
        tag: attributes.tag,
        description: attributes.description || body.slice(0, 150) + '...',
        html,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

function prerenderBlog() {
  const indexPath = join(DIST_DIR, 'index.html');
  if (!existsSync(indexPath)) {
    console.warn('dist/index.html not found, skipping blog prerender.');
    return;
  }

  const indexHtml = readFileSync(indexPath, 'utf8');
  const { headAssets, bodyAssets } = extractHeadAssets(indexHtml);
  const posts = loadPosts();

  for (const post of posts) {
    const canonical = `${SITE_URL}/blog/${post.slug}`;
    const ogImage = `${SITE_URL}/og/${post.slug}.svg`;
    const pageMeta = buildHeadMeta({
      title: post.title,
      description: post.description,
      canonical,
      ogType: 'article',
      ogImage,
      publishedTime: post.date,
      tag: post.tag,
      jsonLd: buildArticleJsonLd(post, canonical, ogImage),
    });

    const mainContent = `
        <article>
          <h1>${escapeHtml(post.title)}</h1>
          <p><time datetime="${post.date}">${post.date}</time> · ${escapeHtml(post.tag)}</p>
          ${post.html}
        </article>
        <p><a href="${canonical}">Open interactive version</a></p>`;

    const html = buildStaticPage({ headAssets, bodyAssets, pageMeta, mainContent });
    const outDir = join(DIST_DIR, 'blog', post.slug);
    mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, 'index.html'), html, 'utf8');
  }

  const blogIndexMeta = buildHeadMeta({
    title: 'Blog',
    description: 'Thoughts and insights on software development, backend engineering, distributed systems, and interactive computing.',
    canonical: `${SITE_URL}/blog`,
    ogType: 'website',
    ogImage: `${SITE_URL}/og/blog-default.png`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'Kriyanshi Blog',
      url: `${SITE_URL}/blog`,
      description: 'Thoughts and insights on software development and backend engineering.',
    },
  });

  const blogListContent = `
        <main class="static-blog">
          <h1>Blog</h1>
          <ul>
            ${posts
              .map(
                (post) =>
                  `<li><a href="${SITE_URL}/blog/${post.slug}">${escapeHtml(post.title)}</a> <span>(${post.date})</span></li>`
              )
              .join('\n            ')}
          </ul>
        </main>`;

  const blogIndexHtml = buildStaticPage({
    headAssets,
    bodyAssets,
    pageMeta: blogIndexMeta,
    mainContent: blogListContent,
  });

  const blogOutDir = join(DIST_DIR, 'blog');
  mkdirSync(blogOutDir, { recursive: true });
  writeFileSync(join(blogOutDir, 'index.html'), blogIndexHtml, 'utf8');

  console.log(`✓ Pre-rendered ${posts.length} blog posts + blog index in ${blogOutDir}`);
}

prerenderBlog();
