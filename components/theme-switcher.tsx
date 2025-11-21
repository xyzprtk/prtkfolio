"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();
  const theme = resolvedTheme ?? "dark";
  const isDark = theme === "dark";
  const nextTheme = isDark ? "light" : "dark";
  const ControlIcon = isDark ? Sun : Moon;

  return (
    <Button
      variant="ghost"
      size="sm"
      className="group rounded-full border-none bg-transparent transition duration-300 hover:-translate-y-0.5 hover:border-ring/60 hover:bg-background/70 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      onClick={() => setTheme(nextTheme)}
      aria-label={`Switch to ${nextTheme} mode`}
    >
      <ControlIcon
        className={`h-5 w-5 transition duration-300 ${
          isDark ? "text-amber-300" : "text-slate-900"
        } group-hover:-translate-y-0.5 group-hover:rotate-6`}
      />
    </Button>
  );
}

