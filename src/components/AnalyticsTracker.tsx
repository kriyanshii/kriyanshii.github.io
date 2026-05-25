import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageview } from '../utils/analytics';

export function AnalyticsTracker() {
  const location = useLocation();
  const isInitialLoad = useRef(true);

  useEffect(() => {
    if (isInitialLoad.current) {
      isInitialLoad.current = false;
      return;
    }

    trackPageview(location.pathname, location.search);
  }, [location.pathname, location.search]);

  return null;
}
