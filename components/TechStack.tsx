"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Trocchi } from "next/font/google";

const trocchi = Trocchi({
  variable: "--font-trocchi",
  subsets: ["latin"],
  weight: ["400"],
});

const techStack = [
    {
        name: "Python",
        path: "/tech/Python.svg",
      },
  {
        name: "Postgres SQL",
        path: "/tech/PostgresSQL.svg",
  },

  {
    name: "Linux",
    path: "/tech/Linux.svg",
  },
  {
    name: "JavaScript",
    path: "/tech/JavaScript.svg",
  },
  {
    name: "TypeScript",
    path: "/tech/TypeScript.svg",
  },
  {
    name: "Docker",
    path: "/tech/Docker.svg",
  },
  {
    name: "Kubernetes",
    path: "/tech/Kubernetes.svg",
  },
  {
    name: "Apache Spark",
    path: "/tech/Apache Spark.svg",
  },
  {
    name: "Google Cloud",
    path: "/tech/Google Cloud.svg",
  },
  {
    name: "Shell Scripting",
    path: "/tech/Bash.svg",
  }
];

export default function TechStack() {
  return (
    <div className={cn("w-full py-4", trocchi.className)}>
      <p className="text-sm text-muted-foreground mb-6 opacity-60">Tech Stack</p>
      
      <div className="flex flex-wrap gap-8 sm:gap-12 items-center">
        {techStack.map((tech) => (
          <div 
            key={tech.name}
            className="group flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-1"
          >
            {/* Icon Container */}
            <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12">
              <Image
                src={tech.path}
                alt={tech.name}
                fill
                className={cn(
                  "object-contain transition-all duration-300",
                  // Default state: Muted, grayscale, slightly transparent
                  " opacity-60 dark:invert-[0.6]", 
                  // Hover state: Full color/brightness
                  "group-hover:grayscale-0 group-hover:opacity-100 group-hover:dark:invert-0"
                )}
              />
            </div>
            
            {/* Label */}
            <span className="text-xs font-medium text-muted-foreground/50 transition-colors duration-300 group-hover:text-foreground">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}