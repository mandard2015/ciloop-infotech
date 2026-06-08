"use client";

import { useEffect } from "react";

export function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  useEffect(() => {
    if (!measurementId) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    const w = window as any;
    w.dataLayer = w.dataLayer || [];
    function gtag(...args: unknown[]) {
      w.dataLayer.push(args);
    }
    gtag("js", new Date());
    gtag("config", measurementId);

    return () => {
      document.head.removeChild(script);
    };
  }, [measurementId]);

  return null;
}
