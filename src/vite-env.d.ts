/// <reference types="vite/client" />

interface Window {
  umami?: {
    track: (
      event?: string | ((props: Record<string, unknown>) => Record<string, unknown>),
      data?: Record<string, unknown>,
    ) => void;
  };
}
