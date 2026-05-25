import { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { PageSeo } from '../components/PageSeo';
import { AUTHOR_NAME, postOgImageUrl, postUrl } from '../constants/site';
import { BlogPost as BlogPostType } from '../types';
import { getPostBySlug } from '../utils/blog';

export function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto px-6 pb-16">
        <p className="text-[15px] text-gray-500 dark:text-gray-400">Loading...</p>
      </div>
    );
  }

  if (!post) {
    return null;
  }

  return (
    <div className="max-w-3xl mx-auto px-6 pb-16">
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
        <div className="flex justify-end mb-6">
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
              [&_.mermaid-figure]:my-8 [&_.mermaid-figure]:mx-auto [&_.mermaid-figure]:max-w-full
              [&>p>em]:block [&>p>em]:text-[13px] [&>p>em]:text-gray-500 [&>p>em]:dark:text-gray-400 [&>p>em]:not-italic [&>p>em]:mb-4"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
}
