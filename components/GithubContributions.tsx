"use client";

import React, { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { Trocchi } from "next/font/google";
import { cn } from "@/lib/utils";

const trocchi = Trocchi({
  variable: "--font-trocchi",
  subsets: ["latin"],
  weight: ["400"],
});

export default function GithubGraph() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;
  const explicitTheme = {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  if (!mounted) {
    return (
      <div className="w-full h-40 bg-neutral-100 dark:bg-neutral-900 rounded-xl animate-pulse" />
    );
  }
  const username = "xyzprtk";
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center w-full p-8 rounded-lg border-none  transition-all duration-300",
        trocchi.className
      )}
    >
      <div className="flex w-full items-center justify-between gap-2 mb-6 text-foreground/80">
        <h3 className="text-xl font-medium">GitHub Contributions</h3>
        <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm font-normal hover:underline">@{username}</a>
      </div>

      <div className="w-full overflow-hidden flex justify-center">
        <GitHubCalendar
          username={username}
          blockSize={12}
          blockMargin={4}
          fontSize={14}
          colorScheme={currentTheme === "dark" ? "dark" : "light"}
          theme={explicitTheme}
          style={{
            color: currentTheme === "dark" ? "#e5e7eb" : "#1f2937",
          }}
        />
      </div>
    </div>
  );
}