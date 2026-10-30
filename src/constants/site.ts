export const SITE_URL = 'https://kriyanshii.github.io';
export const SITE_NAME = 'Kriyanshi';
export const SITE_TAGLINE = 'Independent software engineer building backend and platform systems.';
export const AUTHOR_NAME = 'Kriyanshi';
export const DEFAULT_DESCRIPTION =
  "Independent software engineer building backend and platform systems. Previously at Matrix Business and ISRO's Space Applications Centre (satellite data pipelines, JupyterHub platforms, workflow infrastructure). Open-source contributor to Dagu, Ray and Temporal. Open to backend, Go and platform roles.";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og/blog-default.png`;

export function absoluteUrl(path: string): string {
  if (path.startsWith('http')) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export function postUrl(slug: string): string {
  return `${SITE_URL}/blog/${slug}`;
}

export function postOgImageUrl(slug: string, customImage?: string): string {
  if (customImage) return absoluteUrl(customImage);
  return `${SITE_URL}/og/${slug}.png`;
}
