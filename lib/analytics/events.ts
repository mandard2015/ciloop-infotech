export type AnalyticsEvent = {
  category: string;
  action: string;
  label?: string;
  value?: number;
};

export function trackEvent(event: AnalyticsEvent) {
  if (typeof window === "undefined") {
    return;
  }

  const dataLayer = (window as any).dataLayer;

  if (Array.isArray(dataLayer)) {
    dataLayer.push({
      event: "custom_event",
      ...event,
    });
  }
}
