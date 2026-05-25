import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const MANIFEST_PATH = join(__dirname, '..', '..', 'src', 'generated', 'mermaid-manifest.json');

/** @returns {Record<string, string[]>} */
export function loadMermaidManifest() {
  if (!existsSync(MANIFEST_PATH)) return {};
  try {
    return JSON.parse(readFileSync(MANIFEST_PATH, 'utf8'));
  } catch {
    return {};
  }
}

export function mermaidFigureHtml(imageUrl, alt = 'Diagram') {
  const safeAlt = alt.replace(/"/g, '&quot;');
  return `<figure class="mermaid-figure"><img src="${imageUrl}" alt="${safeAlt}" class="mermaid-diagram" loading="lazy" /></figure>`;
}
