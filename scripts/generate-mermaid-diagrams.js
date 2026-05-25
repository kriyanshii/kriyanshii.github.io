#!/usr/bin/env node
/**
 * Pre-renders Mermaid diagrams from blog markdown to SVG via @mermaid-js/mermaid-cli.
 * Outputs to public/diagrams/{slug}/{index}.svg and updates src/generated/mermaid-manifest.json.
 * Run before `vite build` so assets are copied into dist/.
 */

import { readFileSync, readdirSync, mkdirSync, writeFileSync, existsSync, rmSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { execFileSync } from 'child_process';
import { createHash } from 'crypto';
import frontMatter from 'front-matter';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const BLOG_DIR = join(ROOT, 'src', 'content', 'blog');
const DIAGRAMS_DIR = join(ROOT, 'public', 'diagrams');
const CACHE_DIR = join(ROOT, '.cache', 'mermaid');
const MANIFEST_PATH = join(ROOT, 'src', 'generated', 'mermaid-manifest.json');
const MMDC = join(ROOT, 'node_modules', '.bin', 'mmdc');

const MERMAID_BLOCK_RE = /```mermaid\n([\s\S]*?)```/g;

function hashContent(content) {
  return createHash('sha256').update(content.trim()).digest('hex').slice(0, 16);
}

function extractMermaidBlocks(body) {
  const blocks = [];
  let match;
  while ((match = MERMAID_BLOCK_RE.exec(body)) !== null) {
    blocks.push(match[1].trim());
  }
  return blocks;
}

function renderDiagram(mmdPath, svgPath) {
  execFileSync(
    MMDC,
    ['-i', mmdPath, '-o', svgPath, '-b', 'transparent', '--quiet'],
    { stdio: 'pipe', env: { ...process.env, PUPPETEER_SKIP_DOWNLOAD: undefined } }
  );
}

function generateMermaidDiagrams() {
  if (!existsSync(BLOG_DIR)) {
    console.warn('Blog directory not found, skipping Mermaid diagram generation.');
    return;
  }

  if (!existsSync(MMDC)) {
    console.error('mmdc not found. Run npm install to add @mermaid-js/mermaid-cli.');
    process.exit(1);
  }

  mkdirSync(CACHE_DIR, { recursive: true });
  mkdirSync(DIAGRAMS_DIR, { recursive: true });

  /** @type {Record<string, string[]>} */
  const manifest = {};
  let generated = 0;
  let cached = 0;

  const files = readdirSync(BLOG_DIR).filter((file) => file.endsWith('.md'));

  for (const file of files) {
    const slug = file.replace(/\.md$/, '');
    const raw = readFileSync(join(BLOG_DIR, file), 'utf8');
    const { body } = frontMatter(raw);
    const blocks = extractMermaidBlocks(body);

    if (blocks.length === 0) continue;

    const slugDir = join(DIAGRAMS_DIR, slug);
    mkdirSync(slugDir, { recursive: true });
    manifest[slug] = [];

    blocks.forEach((definition, index) => {
      const contentHash = hashContent(definition);
      const svgFileName = `${index}.svg`;
      const svgPath = join(slugDir, svgFileName);
      const hashPath = join(slugDir, `${index}.hash`);
      const publicUrl = `/diagrams/${slug}/${svgFileName}`;

      if (existsSync(svgPath) && existsSync(hashPath) && readFileSync(hashPath, 'utf8') === contentHash) {
        manifest[slug].push(publicUrl);
        cached += 1;
        return;
      }

      const mmdPath = join(CACHE_DIR, `${slug}-${index}.mmd`);
      writeFileSync(mmdPath, definition, 'utf8');

      try {
        renderDiagram(mmdPath, svgPath);
        writeFileSync(hashPath, contentHash, 'utf8');
        manifest[slug].push(publicUrl);
        generated += 1;
      } catch (err) {
        console.error(`Failed to render diagram ${slug}[${index}]:`, err.stderr?.toString() || err.message || err);
        process.exit(1);
      }
    });
  }

  // Remove stale slug directories no longer in manifest
  if (existsSync(DIAGRAMS_DIR)) {
    for (const entry of readdirSync(DIAGRAMS_DIR)) {
      if (!manifest[entry]) {
        rmSync(join(DIAGRAMS_DIR, entry), { recursive: true, force: true });
      }
    }
  }

  writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + '\n', 'utf8');
  console.log(`✓ Mermaid diagrams: ${generated} rendered, ${cached} cached → ${DIAGRAMS_DIR}`);
}

generateMermaidDiagrams();
