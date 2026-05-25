#!/usr/bin/env node
/**
 * Generates per-post Open Graph SVG images (1200x630) at build time.
 * Run after `vite build` so dist/og/ exists alongside other assets.
 */

import { readFileSync, readdirSync, mkdirSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import frontMatter from 'front-matter';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BLOG_DIR = join(__dirname, '..', 'src', 'content', 'blog');
const DIST_OG_DIR = join(__dirname, '..', 'dist', 'og');

function escapeXml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function wrapTitle(title, maxCharsPerLine = 28) {
  const words = title.split(/\s+/);
  const lines = [];
  let current = '';

  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxCharsPerLine && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }

  if (current) lines.push(current);
  return lines.slice(0, 3);
}

function buildOgSvg(title, tag) {
  const lines = wrapTitle(title);
  const lineElements = lines
    .map((line, index) => {
      const y = 250 + index * 58;
      return `<text x="96" y="${y}" fill="#f9fafb" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="44" font-weight="600">${escapeXml(line)}</text>`;
    })
    .join('\n    ');

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-label="${escapeXml(title)}">
  <rect width="1200" height="630" fill="#1a1a1a"/>
  <rect x="0" y="0" width="8" height="630" fill="#3b82f6"/>
  <text x="96" y="120" fill="#93c5fd" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="24" font-weight="600" letter-spacing="0.08em">KRIYANSHI · ${escapeXml((tag || 'BLOG').toUpperCase())}</text>
  ${lineElements}
  <text x="96" y="560" fill="#9ca3af" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="24">kriyanshii.github.io</text>
</svg>`;
}

function generateOgImages() {
  if (!existsSync(BLOG_DIR)) {
    console.warn('Blog directory not found, skipping OG image generation.');
    return;
  }

  mkdirSync(DIST_OG_DIR, { recursive: true });

  const files = readdirSync(BLOG_DIR).filter((file) => file.endsWith('.md'));
  for (const file of files) {
    const slug = file.replace(/\.md$/, '');
    const raw = readFileSync(join(BLOG_DIR, file), 'utf8');
    const { attributes } = frontMatter(raw);
    const svg = buildOgSvg(attributes.title || slug, attributes.tag || 'Blog');
    const outPath = join(DIST_OG_DIR, `${slug}.svg`);
    writeFileSync(outPath, svg, 'utf8');
  }

  console.log(`✓ Generated ${files.length} OG SVG images in ${DIST_OG_DIR}`);
}

generateOgImages();
