"use client";

import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { ClarityScript } from "@/components/analytics/ClarityScript";

export function AnalyticsProviders({
  googleAnalyticsId,
  clarityProjectId,
}: {
  googleAnalyticsId?: string;
  clarityProjectId?: string;
}) {
  return (
    <>
      {googleAnalyticsId ? <GoogleAnalytics measurementId={googleAnalyticsId} /> : null}
      {clarityProjectId ? <ClarityScript projectId={clarityProjectId} /> : null}
    </>
  );
}
