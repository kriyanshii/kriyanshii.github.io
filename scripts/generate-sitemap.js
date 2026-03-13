#!/usr/bin/env node
/**
 * Generates sitemap.xml at build time.
 * Run after `vite build` so dist/ exists.
 * Helps crawlers and agents discover all pages.
 */

import { readdirSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE_URL = 'https://kriyanshii.github.io';
const DIST_DIR = join(__dirname, '..', 'dist');
const BLOG_DIR = join(__dirname, '..', 'src', 'content', 'blog');

function getBlogSlugs() {
  if (!existsSync(BLOG_DIR)) return [];
  return readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}

function buildSitemap() {
  const slugs = getBlogSlugs();
  const today = new Date().toISOString().split('T')[0];

  const urls = [
    { loc: '/', priority: '1.0', changefreq: 'weekly' },
    { loc: '/blog', priority: '0.9', changefreq: 'weekly' },
    ...slugs.map((slug) => ({
      loc: `/blog/${slug}`,
      priority: '0.8',
      changefreq: 'monthly',
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url>
    <loc>${SITE_URL}${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

  const outPath = join(DIST_DIR, 'sitemap.xml');
  writeFileSync(outPath, xml, 'utf8');
  console.log(`✓ sitemap.xml written to ${outPath} (${urls.length} URLs)`);
}

buildSitemap();
