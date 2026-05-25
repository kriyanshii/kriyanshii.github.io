export function escapeXml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export function wrapTitle(title, maxCharsPerLine = 28) {
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

export function buildOgSvg(title, tag) {
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

export function postOgImagePath(slug) {
  return `/og/${slug}.png`;
}

export function postOgImageUrl(siteUrl, slug) {
  return `${siteUrl}${postOgImagePath(slug)}`;
}
