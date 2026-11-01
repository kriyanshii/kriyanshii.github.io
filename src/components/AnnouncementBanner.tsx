import { useState } from 'react';
import { X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { RESUME_URL } from '../data/portfolio';

const DISMISS_KEY = 'home-announcement-isro-tweet-dismissed';
const TWEET_URL = 'https://x.com/kriyanshii/status/2116203185597804869';

function isDismissed() {
  try {
    return localStorage.getItem(DISMISS_KEY) === '1';
  } catch {
    return false;
  }
}

const MESSAGE =
  "🛰️ 2.4k people visited in a day after my ISRO satellite tweet. I'm open to backend / platform roles.";

const linkClass =
  'underline decoration-white/50 underline-offset-2 hover:decoration-white';

export function AnnouncementBanner() {
  const { pathname } = useLocation();
  const [dismissed, setDismissed] = useState(isDismissed);

  if (pathname !== '/' || dismissed) return null;

  const dismiss = () => {
    try {
      localStorage.setItem(DISMISS_KEY, '1');
    } catch {
      /* private mode */
    }
    setDismissed(true);
  };

  return (
    <div className="announcement-banner bg-blue-600 text-white dark:bg-blue-700">
      <div className="flex items-center gap-4 px-6 py-2 text-[13px] leading-snug">
        <div className="announcement-viewport min-w-0 flex-1 overflow-hidden">
          <div className="announcement-run flex w-max">
            <p className="shrink-0 whitespace-nowrap pr-16">{MESSAGE}</p>
            <p className="announcement-clone shrink-0 whitespace-nowrap pr-16" aria-hidden="true">
              {MESSAGE}
            </p>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <a href={TWEET_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
            See the tweet
          </a>
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
            Resume
          </a>
          <button
            type="button"
            onClick={dismiss}
            aria-label="Dismiss announcement"
            className="-mr-1 p-1 text-white/80 hover:text-white"
          >
            <X size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
