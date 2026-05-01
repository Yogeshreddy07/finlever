"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

function subscribe(onStoreChange: () => void) {
  const frame = requestAnimationFrame(onStoreChange);
  return () => cancelAnimationFrame(frame);
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const isDark = resolvedTheme === "dark";

  if (!mounted) {
    return <span aria-hidden="true" className="inline-flex size-10" />;
  }

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex size-10 items-center justify-center rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card)/0.85)] text-[hsl(var(--muted-foreground))] shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-[hsl(var(--accent)/0.55)] hover:text-[hsl(var(--foreground))]"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  );
}
