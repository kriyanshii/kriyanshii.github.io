import MarkdownIt from 'markdown-it';

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
    const diagramDefinition = token.content.trim();
    return `<figure class="mermaid-figure"><div class="mermaid">${diagramDefinition}</div><figcaption>Diagram: ${diagramDefinition.split('\n')[0] || 'flowchart'}</figcaption></figure>`;
  }
  if (originalFenceRule) {
    return originalFenceRule(tokens, idx, options, env, self);
  }
  return self.renderToken(tokens, idx, options);
};

export function renderMarkdown(body) {
  return md.render(body);
}

export function stripLeadingH1(html) {
  return html.replace(/^\s*<h1[^>]*>[\s\S]*?<\/h1>\s*/i, '');
}
