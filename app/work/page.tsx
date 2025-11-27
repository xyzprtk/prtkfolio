import { Trocchi } from "next/font/google";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { Metadata } from "next";

const trocchi = Trocchi({
  variable: "--font-trocchi",
  subsets: ["latin"],
  weight: ["400"],
});

// SEO Metadata
export const metadata: Metadata = {
  title: "Projects & Work",
  description: "Portfolio of data engineering and machine learning projects including credit risk modeling, customer analytics, and mental health analysis in tech. Featuring Python, XGBoost, Pandas, and Scikit-learn implementations.",
  openGraph: {
    title: "Projects & Work - Pratheek Nistala",
    description: "Portfolio of data engineering and machine learning projects",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects & Work - Pratheek Nistala",
    description: "Portfolio of data engineering and machine learning projects",
  },
};

export default function WorkPage() {
  return (
    <div className="relative min-h-screen flex justify-center">
      <main className="flex min-h-screen w-full max-w-5xl flex-col gap-10 px-6 py-10 pt-32 bg-background/30">
        <section className={trocchi.className}>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl m-6">
            Things I've Built
          </h1>
          <p className="mt-6 text-lg text-muted-foreground px-6">
            I've worked on a variety of projects, from small side projects to large scale applications.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 pb-20">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </section>
      </main>
    </div>
  );
}