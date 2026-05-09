"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const shouldUseSmoothScroll = () =>
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const scrollTop = (preferredBehavior: ScrollBehavior = "smooth") => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: shouldUseSmoothScroll() ? preferredBehavior : "instant",
  });
};

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    scrollTop("instant");
  }, [pathname]);

  useEffect(() => {
    const handleInternalLinkClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const anchor = (event.target as Element | null)?.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;

      const url = new URL(anchor.href, window.location.href);
      const isInternal = url.origin === window.location.origin;
      const isDownload = anchor.hasAttribute("download");
      const opensElsewhere = anchor.target && anchor.target !== "_self";

      if (!isInternal || isDownload || opensElsewhere) return;

      if (url.pathname === window.location.pathname) {
        scrollTop();
      }
    };

    document.addEventListener("click", handleInternalLinkClick, true);
    return () => {
      document.removeEventListener("click", handleInternalLinkClick, true);
    };
  }, []);

  return null;
}
