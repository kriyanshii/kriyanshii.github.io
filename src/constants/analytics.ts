/** Key portfolio routes to watch in Umami (Pages → filter by URL). */
export const MONITORED_PATHS = [
  '/',
  '/blog',
  '/projects',
  '/resume',
  '/talks',
  '/opensource',
] as const;

export type MonitoredPath = (typeof MONITORED_PATHS)[number];

export function isMonitoredPath(path: string): path is MonitoredPath {
  return (MONITORED_PATHS as readonly string[]).includes(path);
}
