 "use client";

import GridPatternBackground from "@/components/ui/grid-pattern-background";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <GridPatternBackground
        className="pointer-events-none absolute inset-0 -z-10"
        gridType="lines" // choose from 'dots', 'lines', 'squares', 'crosshatch', 'diamonds'
        gridSize={24} // Adjust grid size
        opacity={0.3} // Adjust opacity
        color="#040406"
        animate={false}
      />
      <HeroSection />
    </div>
  );
}
