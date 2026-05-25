import MarkdownIt from 'markdown-it';
import { loadMermaidManifest, mermaidFigureHtml } from './mermaid-manifest.mjs';

function createMarkdownIt({ mermaidImages = [] } = {}) {
  let mermaidIndex = 0;

  const md = new MarkdownIt({
    html: true,
    breaks: true,
    linkify: true,
    typographer: true,
  });

  const originalFenceRule = md.renderer.rules.fence;
  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const info = (token.info || '').trim().toLowerCase();
    if (info === 'mermaid') {
      const imageUrl = mermaidImages[mermaidIndex++];
      if (imageUrl) {
        return mermaidFigureHtml(imageUrl);
      }
      const diagramDefinition = token.content.trim();
      return `<figure class="mermaid-figure"><div class="mermaid">${diagramDefinition}</div></figure>`;
    }
    if (originalFenceRule) {
      return originalFenceRule(tokens, idx, options, env, self);
    }
    return self.renderToken(tokens, idx, options);
  };

  return md;
}

export function renderMarkdown(body, { slug } = {}) {
  const manifest = loadMermaidManifest();
  const mermaidImages = slug ? manifest[slug] || [] : [];
  const md = createMarkdownIt({ mermaidImages });
  return md.render(body);
}

export function stripLeadingH1(html) {
  return html.replace(/^\s*<h1[^>]*>[\s\S]*?<\/h1>\s*/i, '');
}
