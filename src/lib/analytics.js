export function trackEvent(name, params = {}) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}

export function trackCtaClick({ label, location } = {}) {
  trackEvent("cta_click", {
    cta_label: label,
    cta_location: location,
  });
}

