import GridPatternBackground from "@/components/ui/grid-pattern-background";
import { ThemeSwitcher } from "@/components/theme-switcher";
import LogoText from "@/components/logoText";
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
      <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-10 px-6 py-10">
        <nav className="flex items-center justify-between border-b border-border/50 pb-6">
          <div className="flex flex-1 items-center">
            <LogoText />
          </div>
          <div className="flex items-center gap-8 text-sm font-semibold tracking-tight text-foreground">
            <a
              className="transition hover:text-primary"
              href="#portfolio"
              data-theme-link
            >
              Portfolio
            </a>
            <a
              className="transition hover:text-primary"
              href="#blog"
              data-theme-link
            >
              Blog
            </a>
            <ThemeSwitcher />
          </div>
        </nav>

        <section className="flex flex-1 flex-col justify-center gap-6 p-10 text-lg leading-relaxed backdrop-blur-xl">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis fugiat, odit nobis hic facere eum eos dolore molestiae amet delectus! Dolor dignissimos nisi aperiam architecto aut iste eius enim voluptatibus laboriosam possimus placeat, eaque voluptas, nesciunt natus delectus culpa. Architecto possimus adipisci unde ullam nesciunt?
          </p>
        </section>
      </main>
    </div>
  );
}
