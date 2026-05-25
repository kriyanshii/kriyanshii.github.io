#!/usr/bin/env node
/**
 * Generates sitemap.xml at build time.
 * Run after `vite build` so dist/ exists.
 * Helps crawlers and agents discover all pages.
 */

import { readFileSync, readdirSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import frontMatter from 'front-matter';
import { normalizeDate } from './lib/dates.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE_URL = 'https://kriyanshii.github.io';
const DIST_DIR = join(__dirname, '..', 'dist');
const BLOG_DIR = join(__dirname, '..', 'src', 'content', 'blog');

function getBlogPosts() {
  if (!existsSync(BLOG_DIR)) return [];

  return readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const slug = file.replace(/\.md$/, '');
      const raw = readFileSync(join(BLOG_DIR, file), 'utf8');
      const { attributes } = frontMatter(raw);
      return {
        slug,
        lastmod: normalizeDate(attributes.date),
      };
    });
}

function buildSitemap() {
  const posts = getBlogPosts();
  const today = new Date().toISOString().split('T')[0];

  const urls = [
    { loc: '/', priority: '1.0', changefreq: 'weekly', lastmod: today },
    { loc: '/blog', priority: '0.9', changefreq: 'weekly', lastmod: today },
    { loc: '/projects', priority: '0.8', changefreq: 'monthly', lastmod: today },
    { loc: '/resume', priority: '0.8', changefreq: 'monthly', lastmod: today },
    { loc: '/talks', priority: '0.8', changefreq: 'monthly', lastmod: today },
    { loc: '/opensource', priority: '0.8', changefreq: 'monthly', lastmod: today },
    ...posts.map((post) => ({
      loc: `/blog/${post.slug}`,
      priority: '0.8',
      changefreq: 'monthly',
      lastmod: post.lastmod,
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url>
    <loc>${SITE_URL}${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
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
