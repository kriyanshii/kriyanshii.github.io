export function trackPageview(pathname: string, search = '') {
  if (typeof window === 'undefined' || !window.umami) return;

  const url = `${pathname}${search}`;
  window.umami.track((props) => ({
    ...props,
    url,
  }));
}
