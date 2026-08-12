import frontMatter from 'front-matter';
import MarkdownIt from 'markdown-it';
import type { BlogPost, BlogFrontmatter } from '../types';
import mermaidManifest from '../generated/mermaid-manifest.json';

function normalizeDate(value: string | Date): string {
  if (typeof value === 'string') return value.split('T')[0];
  if (value instanceof Date) return value.toISOString().split('T')[0];
  return String(value).split('T')[0];
}

function mermaidFigureHtml(imageUrl: string, alt = 'Diagram') {
  const safeAlt = alt.replace(/"/g, '&quot;');
  const safeSrc = imageUrl.replace(/"/g, '&quot;');
  return `<figure class="mermaid-figure" data-diagram-src="${safeSrc}" role="button" tabindex="0" aria-label="Expand diagram">
  <img src="${safeSrc}" alt="${safeAlt}" class="mermaid-diagram" loading="lazy" />
  <span class="mermaid-expand-hint">Click to expand</span>
</figure>`;
}

function createMarkdownRenderer(mermaidImages: string[] = []) {
  let mermaidIndex = 0;

  const md = new MarkdownIt({
    html: true,
    breaks: true,
    linkify: true,
    typographer: true,
    highlight: function (str, lang) {
      return `<pre class="bg-gray-50 dark:bg-[#2a2a2a] p-4 rounded-lg overflow-x-auto"><code class="language-${lang}">${str}</code></pre>`;
    },
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
      const diagramDefinition = token.content;
      return `<div class="mermaid">\n${diagramDefinition}\n</div>`;
    }
    if (originalFenceRule) {
      return originalFenceRule(tokens, idx, options, env, self);
    }
    return self.renderToken(tokens, idx, options);
  };

  return md;
}

function renderPostBody(body: string, slug: string) {
  const mermaidImages = mermaidManifest[slug as keyof typeof mermaidManifest] ?? [];
  const md = createMarkdownRenderer(mermaidImages);
  return md.render(body);
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const files = import.meta.glob('../content/blog/*.md', { 
    query: '?raw',
    import: 'default',
    eager: true
  });

  const posts = Object.entries(files)
    .map(([filepath, content]) => {
      if (typeof content !== 'string') {
        console.error('Unexpected content type for', filepath);
        return null;
      }

      const fileName = filepath.split('/').pop() || '';
      const slug = fileName.replace(/\.md$/, '');
      
      try {
        const { attributes, body } = frontMatter<BlogFrontmatter>(content);
        
        return {
          slug,
          title: attributes.title,
          date: normalizeDate(attributes.date),
          content: renderPostBody(body, slug),
          description: attributes.description || body.slice(0, 150) + '...',
          tag: attributes.tag,
          ogImage: attributes.ogImage,
          isNew: new Date(attributes.date) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) // New if less than 7 days old
        } as BlogPost;
      } catch (error) {
        console.error('Error processing', filepath, error);
        return null;
      }
    })
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const files = import.meta.glob('../content/blog/*.md', { 
    query: '?raw',
    import: 'default',
    eager: true
  });

  const filePath = Object.keys(files).find(path => path.includes(`${slug}.md`));
  if (!filePath) return null;

  const content = files[filePath];
  if (typeof content !== 'string') return null;

  try {
    const { attributes, body } = frontMatter<BlogFrontmatter>(content);
    
    return {
      slug,
      title: attributes.title,
      date: normalizeDate(attributes.date),
      content: renderPostBody(body, slug),
      description: attributes.description || body.slice(0, 150) + '...',
      tag: attributes.tag,
      ogImage: attributes.ogImage,
      isNew: new Date(attributes.date) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    } as BlogPost;
  } catch (error) {
    console.error('Error processing', filePath, error);
    return null;
  }
}
