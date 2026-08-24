import { useEffect, useState, type KeyboardEvent, type MouseEvent } from 'react';
import { ArrowLeft, ArrowUpRight, X, ZoomIn } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { OpenToWorkNote } from '../components/OpenToWorkNote';
import { PageSeo } from '../components/PageSeo';
import { AUTHOR_NAME, postOgImageUrl, postUrl } from '../constants/site';
import { RESUME_URL } from '../data/portfolio';
import { BlogPost as BlogPostType } from '../types';
import { getPostBySlug } from '../utils/blog';

export function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  useEffect(() => {
    const loadPost = async () => {
      if (!slug) {
        navigate('/blog');
        return;
      }

      try {
        const postData = await getPostBySlug(slug);
        if (postData) {
          setPost(postData);
        } else {
          navigate('/blog');
        }
      } catch (error) {
        console.error('Error loading post:', error);
        navigate('/blog');
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug, navigate]);

  useEffect(() => {
    if (!lightboxSrc) return;

    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') setLightboxSrc(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [lightboxSrc]);

  const openDiagram = (figure: Element) => {
    const src =
      figure.getAttribute('data-diagram-src') ||
      figure.querySelector('img')?.getAttribute('src');
    if (src) setLightboxSrc(src);
  };

  const handleArticleClick = (event: MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    const figure = target.closest('.mermaid-figure');
    if (figure) openDiagram(figure);
  };

  const handleArticleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    const target = event.target as HTMLElement;
    const figure = target.closest('.mermaid-figure');
    if (!figure || target !== figure) return;
    event.preventDefault();
    openDiagram(figure);
  };

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto px-6 pb-16">
        <p className="text-[15px] text-gray-500 dark:text-gray-400">Loading...</p>
      </div>
    );
  }

  if (!post) {
    return null;
  }

  return (
    <div className="max-w-2xl mx-auto px-6 pb-16">
      <PageSeo
        title={post.title}
        description={post.description}
        canonical={postUrl(post.slug)}
        ogType="article"
        ogImage={postOgImageUrl(post.slug, post.ogImage)}
        publishedTime={post.date}
        author={AUTHOR_NAME}
        tag={post.tag}
      />

      <header className="mb-12 pb-8 border-b border-gray-100 dark:border-gray-800">
        <div className="mb-6 flex items-center justify-between gap-3">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200/80 bg-emerald-50/80 px-2.5 py-1 text-[11px] font-medium text-emerald-800 transition-colors hover:border-emerald-300 hover:bg-emerald-50 dark:border-emerald-900/50 dark:bg-emerald-950/40 dark:text-emerald-300 dark:hover:border-emerald-800 dark:hover:bg-emerald-950/60"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
            Open to work
            <ArrowUpRight size={11} className="opacity-70" />
          </a>
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 -mr-2.5 text-[13px] font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-white dark:hover:bg-[#242424] hover:shadow-sm transition-all group"
          >
            <ArrowLeft
              size={14}
              className="transition-transform group-hover:-translate-x-0.5"
            />
            Blog
          </Link>
        </div>

        <h1 className="text-2xl font-medium mb-4 text-gray-900 dark:text-gray-100 leading-snug">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-gray-500 dark:text-gray-400">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            {post.tag}
          </span>
        </div>
      </header>

      <article className="prose max-w-none">
        <div
          onClick={handleArticleClick}
          onKeyDown={handleArticleKeyDown}
          className="text-[15px] text-gray-800 dark:text-gray-300 leading-relaxed
              [&>p]:mb-6
              [&>h2]:text-xl [&>h2]:font-medium [&>h2]:mb-4 [&>h2]:mt-10 [&>h2]:text-gray-900 [&>h2]:dark:text-gray-100
              [&>h3]:text-lg [&>h3]:font-medium [&>h3]:mb-3 [&>h3]:mt-8 [&>h3]:text-gray-900 [&>h3]:dark:text-gray-100
              [&>ul]:mb-6 [&>ul]:list-disc [&>ul]:pl-6
              [&>ol]:mb-6 [&>ol]:list-decimal [&>ol]:pl-6
              [&>li]:mb-2
              [&>hr]:my-10 [&>hr]:border-gray-100 [&>hr]:dark:border-gray-800
              [&>blockquote]:border-l-4 [&>blockquote]:border-gray-200 [&>blockquote]:dark:border-gray-700 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:mb-6
              [&_img]:max-w-full [&_img]:h-auto [&_img]:rounded-lg [&_img]:my-8 [&_img]:shadow-md [&_img]:dark:shadow-gray-800
              [&>p>img]:mx-auto [&>p>img]:block
              [&_.mermaid-figure]:group [&_.mermaid-figure]:relative [&_.mermaid-figure]:my-8 [&_.mermaid-figure]:mx-auto [&_.mermaid-figure]:max-w-full
              [&_.mermaid-figure]:overflow-hidden [&_.mermaid-figure]:rounded-xl [&_.mermaid-figure]:border
              [&_.mermaid-figure]:border-gray-200 [&_.mermaid-figure]:dark:border-gray-700
              [&_.mermaid-figure]:bg-slate-50 [&_.mermaid-figure]:dark:bg-[#1c1c1c]
              [&_.mermaid-figure]:p-4 [&_.mermaid-figure]:sm:p-5
              [&_.mermaid-figure]:cursor-zoom-in [&_.mermaid-figure]:outline-none
              [&_.mermaid-figure]:transition-shadow [&_.mermaid-figure]:hover:shadow-md
              [&_.mermaid-figure]:focus-visible:ring-2 [&_.mermaid-figure]:focus-visible:ring-blue-500/40
              [&_.mermaid-scroll]:overflow-x-auto [&_.mermaid-scroll]:overflow-y-hidden
              [&_.mermaid-diagram]:my-0 [&_.mermaid-diagram]:rounded-none [&_.mermaid-diagram]:shadow-none
              [&_.mermaid-diagram]:w-full [&_.mermaid-diagram]:min-w-[40rem] [&_.mermaid-diagram]:h-auto
              [&_.mermaid-expand-hint]:pointer-events-none [&_.mermaid-expand-hint]:absolute [&_.mermaid-expand-hint]:right-3 [&_.mermaid-expand-hint]:top-3
              [&_.mermaid-expand-hint]:inline-flex [&_.mermaid-expand-hint]:items-center [&_.mermaid-expand-hint]:gap-1
              [&_.mermaid-expand-hint]:rounded-full [&_.mermaid-expand-hint]:bg-white/90 [&_.mermaid-expand-hint]:dark:bg-[#2a2a2a]/90
              [&_.mermaid-expand-hint]:px-2.5 [&_.mermaid-expand-hint]:py-1
              [&_.mermaid-expand-hint]:text-[11px] [&_.mermaid-expand-hint]:font-medium
              [&_.mermaid-expand-hint]:text-gray-600 [&_.mermaid-expand-hint]:dark:text-gray-300
              [&_.mermaid-expand-hint]:opacity-0 [&_.mermaid-expand-hint]:transition-opacity
              [&_.mermaid-figure:hover_.mermaid-expand-hint]:opacity-100
              [&_.mermaid-figure:focus-visible_.mermaid-expand-hint]:opacity-100
              [&>p>em]:block [&>p>em]:text-[13px] [&>p>em]:text-gray-500 [&>p>em]:dark:text-gray-400 [&>p>em]:not-italic [&>p>em]:mb-4"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      <OpenToWorkNote className="mt-14" />

      {lightboxSrc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-3 sm:p-5 backdrop-blur-sm"
          onClick={() => setLightboxSrc(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Expanded diagram"
        >
          <button
            type="button"
            onClick={() => setLightboxSrc(null)}
            className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-gray-700 shadow-sm transition hover:bg-white dark:bg-[#2a2a2a] dark:text-gray-200 sm:right-5 sm:top-5"
            aria-label="Close expanded diagram"
          >
            <X size={18} />
          </button>
          <div
            className="flex h-[92vh] w-[96vw] max-w-[90rem] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl dark:bg-[#161616]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex shrink-0 items-center gap-1.5 border-b border-gray-100 px-4 py-3 text-[12px] font-medium text-gray-500 dark:border-gray-800 dark:text-gray-400 sm:px-5">
              <ZoomIn size={13} />
              Expanded view · Esc to close
            </div>
            <div className="min-h-0 flex-1 overflow-auto p-4 sm:p-6">
              <img
                src={lightboxSrc}
                alt="Expanded diagram"
                className="mx-auto block h-auto w-full max-w-none"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
