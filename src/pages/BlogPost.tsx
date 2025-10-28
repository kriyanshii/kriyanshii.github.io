import  { useEffect, useState } from 'react';
import mermaid from 'mermaid';
import svgPanZoom from 'svg-pan-zoom';
import { ArrowLeft } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
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
      day: 'numeric'
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

  // Initialize Mermaid after content loads and updates
  useEffect(() => {
    if (!post) return;
    try {
      mermaid.initialize({ startOnLoad: false, securityLevel: 'loose', theme: 'default' });
      // Render all diagrams inside the article, then attach controls
      let timer: number | undefined;
      const attachControls = () => {
        const containers = document.querySelectorAll<HTMLElement>('.prose .mermaid');
        const instances: Array<{ container: HTMLElement; controls: HTMLElement; panzoom: ReturnType<typeof svgPanZoom> } > = [];

        containers.forEach((container) => {
          // Mermaid replaces inner HTML with an <svg>; select it
          const svg = container.querySelector('svg');
          if (!svg) return;

          // Ensure container can position overlay controls
          if (getComputedStyle(container).position === 'static') {
            container.style.position = 'relative';
          }
          // Make container span available width for proper centering
          container.style.width = '100%';
          // Ensure controls are not clipped
          container.style.overflow = 'visible';

          // Initialize pan/zoom on the SVG
          const panzoom = svgPanZoom(svg as unknown as SVGSVGElement, {
            zoomEnabled: true,
            controlIconsEnabled: false,
            fit: true,
            center: true,
            minZoom: 0.2,
            maxZoom: 10,
            zoomScaleSensitivity: 0.2,
            contain: false,
          });

          // Explicitly fit and center to ensure default view is centered
          try {
            panzoom.resize();
            panzoom.fit();
            panzoom.center();
          } catch (err) {
            console.debug('Mermaid panzoom initial center failed', err);
          }

          // Build controls UI
          const controls = document.createElement('div');
          controls.style.position = 'absolute';
          controls.style.top = '8px';
          controls.style.right = '8px';
          controls.style.display = 'flex';
          controls.style.gap = '6px';
          controls.style.zIndex = '10';
          controls.style.background = 'rgba(255,255,255,0.8)';
          controls.style.borderRadius = '8px';
          controls.style.padding = '4px';
          controls.style.boxShadow = '0 1px 6px rgba(0,0,0,0.12)';

          const mkBtn = (label: string, title: string) => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.textContent = label;
            btn.title = title;
            btn.style.padding = '4px 8px';
            btn.style.lineHeight = '1';
            btn.style.fontSize = '12px';
            btn.style.border = '1px solid rgba(0,0,0,0.1)';
            btn.style.borderRadius = '6px';
            btn.style.background = 'white';
            btn.style.cursor = 'pointer';
            btn.style.color = 'rgb(31 41 55)';
            return btn;
          };

          const zoomInBtn = mkBtn('+', 'Zoom in');
          const zoomOutBtn = mkBtn('-', 'Zoom out');
          const resetBtn = mkBtn('⟳', 'Reset view');
          const fullBtn = mkBtn('⛶', 'Fullscreen');

          // Fullscreen overlay helper using a cloned SVG so original content stays in place
          let overlayEl: (HTMLElement & { requestFullscreen?: () => Promise<void>; webkitRequestFullscreen?: () => Promise<void> }) | null = null;
          let overlayPanzoom: ReturnType<typeof svgPanZoom> | null = null;

          const openFullscreenOverlay = async () => {
            // Build overlay
            const overlay = document.createElement('div');
            overlay.style.position = 'fixed';
            overlay.style.inset = '0';
            overlay.style.background = 'rgba(0,0,0,0.85)';
            overlay.style.display = 'flex';
            overlay.style.alignItems = 'center';
            overlay.style.justifyContent = 'center';
            overlay.style.zIndex = '9999';
            overlay.style.padding = '24px';

            // Wrapper to constrain max size
            const wrap = document.createElement('div');
            wrap.style.position = 'relative';
            wrap.style.width = '100%';
            wrap.style.height = '100%';
            wrap.style.display = 'flex';
            wrap.style.alignItems = 'center';
            wrap.style.justifyContent = 'center';
            overlay.appendChild(wrap);

            // Clone the current SVG so we don't disturb original
            const srcSvg = svg as unknown as SVGSVGElement;
            const clone = srcSvg.cloneNode(true) as SVGSVGElement;
            // Ensure clone scales within wrapper
            clone.style.width = '90%';
            clone.style.height = '90%';
            clone.style.maxWidth = '1600px';
            clone.style.maxHeight = '90%';
            wrap.appendChild(clone);

            // Controls for overlay
            const oControls = document.createElement('div');
            oControls.style.position = 'absolute';
            oControls.style.top = '16px';
            oControls.style.right = '16px';
            oControls.style.display = 'flex';
            oControls.style.gap = '8px';
            oControls.style.zIndex = '10000';
            oControls.style.background = 'rgba(255,255,255,0.9)';
            oControls.style.borderRadius = '10px';
            oControls.style.padding = '6px';
            oControls.style.boxShadow = '0 2px 10px rgba(0,0,0,0.25)';
            wrap.appendChild(oControls);

            const mkOverlayBtn = (label: string, title: string) => {
              const b = document.createElement('button');
              b.type = 'button';
              b.textContent = label;
              b.title = title;
              b.style.padding = '6px 10px';
              b.style.lineHeight = '1';
              b.style.fontSize = '13px';
              b.style.border = '1px solid rgba(0,0,0,0.1)';
              b.style.borderRadius = '8px';
              b.style.background = 'white';
              b.style.cursor = 'pointer';
              b.style.color = 'rgb(31 41 55)';
              return b;
            };

            const oZoomIn = mkOverlayBtn('+', 'Zoom in');
            const oZoomOut = mkOverlayBtn('-', 'Zoom out');
            const oReset = mkOverlayBtn('⟳', 'Reset');
            const oClose = mkOverlayBtn('✕', 'Close');
            oControls.appendChild(oZoomOut);
            oControls.appendChild(oZoomIn);
            oControls.appendChild(oReset);
            oControls.appendChild(oClose);

            document.body.appendChild(overlay);

            // Panzoom for overlay clone
            const pz = svgPanZoom(clone, {
              zoomEnabled: true,
              controlIconsEnabled: false,
              fit: true,
              center: true,
              minZoom: 0.1,
              maxZoom: 20,
              zoomScaleSensitivity: 0.2,
              contain: false,
            });
            try {
              pz.resize();
              pz.fit();
              pz.center();
            } catch (err) {
              console.debug('Overlay panzoom init failed', err);
            }

            oZoomIn.addEventListener('click', () => pz.zoomBy(1.2));
            oZoomOut.addEventListener('click', () => pz.zoomBy(1 / 1.2));
            oReset.addEventListener('click', () => { pz.resetZoom(); pz.center(); pz.fit(); });
            oClose.addEventListener('click', async () => {
            	try { await document.exitFullscreen(); } catch (err) { console.debug('Exit fullscreen failed', err); }
            });

            // Request fullscreen on overlay (not original)
            overlayEl = overlay;
            overlayPanzoom = pz;
            try {
              if (overlay.requestFullscreen) {
                await overlay.requestFullscreen();
              } else {
                const anyOverlay = overlay as unknown as { webkitRequestFullscreen?: () => Promise<void> };
                if (typeof anyOverlay.webkitRequestFullscreen === 'function') {
                  await anyOverlay.webkitRequestFullscreen();
                }
              }
            } catch (err) {
              console.debug('Overlay fullscreen request failed', err);
            }

            // Keep centered on resize while in fullscreen
            const onFsResize = () => {
              if (!overlayPanzoom) return;
              try { overlayPanzoom.resize(); overlayPanzoom.fit(); overlayPanzoom.center(); } catch (err) { console.debug('Overlay resize recenter failed', err); }
            };
            window.addEventListener('resize', onFsResize);
            overlay.addEventListener('fullscreenchange', onFsResize);

            // Cleanup when exiting fullscreen
            const onFsChange = () => {
              if (!document.fullscreenElement && overlayEl) {
                try { overlayPanzoom?.destroy(); } catch (err) { console.debug('Overlay panzoom destroy failed', err); }
                try { document.body.removeChild(overlayEl); } catch (err) { console.debug('Overlay removal failed', err); }
                window.removeEventListener('resize', onFsResize);
                overlay.removeEventListener('fullscreenchange', onFsResize);
                document.removeEventListener('fullscreenchange', onFsChange);
                overlayEl = null;
                overlayPanzoom = null;
              }
            };
            document.addEventListener('fullscreenchange', onFsChange);
          };

          zoomInBtn.addEventListener('click', () => panzoom.zoomBy(1.2));
          zoomOutBtn.addEventListener('click', () => panzoom.zoomBy(1 / 1.2));
          resetBtn.addEventListener('click', () => {
            panzoom.resetZoom();
            panzoom.center();
            panzoom.fit();
          });
          fullBtn.addEventListener('click', async () => {
            try {
              if (!document.fullscreenElement) {
                await openFullscreenOverlay();
              } else {
                await document.exitFullscreen();
              }
              // Re-center original after any fullscreen transitions, just in case
              setTimeout(() => {
                try { panzoom.resize(); panzoom.fit(); panzoom.center(); } catch (err2) { console.debug('Recenter after FS', err2); }
              }, 60);
            } catch (err) {
              console.error('Fullscreen failed:', err);
            }
          });

          controls.appendChild(zoomOutBtn);
          controls.appendChild(zoomInBtn);
          controls.appendChild(resetBtn);
          controls.appendChild(fullBtn);
          container.appendChild(controls);

          instances.push({ container, controls, panzoom });
        });

        // Store instances on window for debugging and cleanup
        (window as unknown as { __mermaidPanzoom?: typeof instances }).__mermaidPanzoom = instances;

        // On window resize, keep diagrams centered
        const onResize = () => {
          const inst = (window as unknown as { __mermaidPanzoom?: typeof instances }).__mermaidPanzoom;
          if (!inst) return;
          inst.forEach(({ panzoom }) => {
            try {
              panzoom.resize();
              panzoom.fit();
              panzoom.center();
            } catch (err3) {
              console.debug('Mermaid panzoom resize center failed', err3);
            }
          });
        };
        window.addEventListener('resize', onResize);
        (window as unknown as { __mermaidPanzoomOnResize?: () => void }).__mermaidPanzoomOnResize = onResize;
      };

      mermaid
        .run({ querySelector: '.prose .mermaid' })
        .then(() => {
          // slight delay to ensure SVGs are in DOM
          timer = window.setTimeout(() => attachControls(), 0);
        })
        .catch((e) => {
          console.error('Mermaid render error:', e);
        });

      return () => {
        if (typeof timer === 'number') window.clearTimeout(timer);
        const instances = (window as unknown as { __mermaidPanzoom?: Array<{ container: HTMLElement; controls: HTMLElement; panzoom: ReturnType<typeof svgPanZoom> }> }).__mermaidPanzoom;
        if (instances) {
          instances.forEach(({ container, controls, panzoom }) => {
            try { panzoom.destroy(); } catch (err4) { console.debug('Mermaid panzoom destroy failed', err4); }
            try { container.removeChild(controls); } catch (err5) { console.debug('Mermaid controls removal failed', err5); }
          });
          (window as unknown as { __mermaidPanzoom?: unknown }).__mermaidPanzoom = undefined;
        }
        const onResize = (window as unknown as { __mermaidPanzoomOnResize?: () => void }).__mermaidPanzoomOnResize;
        if (onResize) {
          window.removeEventListener('resize', onResize);
          (window as unknown as { __mermaidPanzoomOnResize?: unknown }).__mermaidPanzoomOnResize = undefined;
        }
      };
    } catch (e) {
      console.error('Mermaid initialization error:', e);
    }
  }, [post]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#fafafa] dark:bg-[#1a1a1a] relative">
        <div className="max-w-2xl mx-auto px-6 py-16">
          Loading...
        </div>
      </div>
    );
  }

  if (!post) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#1a1a1a] relative">
      {/* Back button - Desktop Only */}
      <div className="hidden lg:block fixed top-24 left-6 z-40">
        <Link 
          to="/blog"
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
        >
          <ArrowLeft size={16} className="mr-1" />
          Back to Blog
        </Link>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-6 py-16">
        <article className="prose prose-gray dark:prose-invert max-w-none">
          <h1 className="text-3xl font-medium mb-8 text-gray-900 dark:text-gray-100">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-12">
            <time>{formatDate(post.date)}</time>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              {post.tag}
            </span>
          </div>

          <div 
            className="text-gray-700 dark:text-gray-300 leading-relaxed
              [&>p]:mb-6 
              [&>h1]:text-2xl [&>h1]:font-medium [&>h1]:mb-4 
              [&>h2]:text-xl [&>h2]:font-medium [&>h2]:mb-4 
              [&>h3]:text-lg [&>h3]:font-medium [&>h3]:mb-3
              [&>ul]:mb-6 [&>ul]:list-disc [&>ul]:pl-6
              [&>ol]:mb-6 [&>ol]:list-decimal [&>ol]:pl-6
              [&>li]:mb-2
              [&>blockquote]:border-l-4 [&>blockquote]:border-gray-200 [&>blockquote]:dark:border-gray-700 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:mb-6"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </article>
      </div>
    </div>
  );
}