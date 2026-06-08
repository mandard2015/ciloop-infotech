"use client";

import { useEffect } from "react";

export function ClarityScript({ projectId }: { projectId: string }) {
  useEffect(() => {
    if (!projectId) return;

    const script = document.createElement("script");
    script.async = true;
    script.innerHTML = `window.dataLayer = window.dataLayer || []; function clarity(){window.dataLayer.push(arguments);} clarity('init', '${projectId}');`;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [projectId]);

  return null;
}
