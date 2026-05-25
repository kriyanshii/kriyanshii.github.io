#!/usr/bin/env node
/**
 * Generates per-post Open Graph PNG images (1200x630) at build time.
 * Run after `vite build` so dist/og/ exists alongside other assets.
 */

import { readFileSync, readdirSync, mkdirSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import frontMatter from 'front-matter';
import { Resvg } from '@resvg/resvg-js';
import { buildOgSvg } from './lib/og-image.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BLOG_DIR = join(__dirname, '..', 'src', 'content', 'blog');
const DIST_OG_DIR = join(__dirname, '..', 'dist', 'og');

function svgToPng(svg) {
  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: 1200 },
  });
  return resvg.render().asPng();
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
    const png = svgToPng(svg);
    writeFileSync(join(DIST_OG_DIR, `${slug}.png`), png);
  }

  console.log(`✓ Generated ${files.length} OG PNG images in ${DIST_OG_DIR}`);
}

generateOgImages();
