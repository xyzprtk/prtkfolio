// components/ProjectCard.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import { Project } from "@/data/projects";
import { Button } from "./ui/button";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 transition-all hover:shadow-lg">
      {/* Image Section */}
      <div className="relative h-48 w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col gap-4">
        <div>
          <h3 className="text-xl font-bold font-(family-name:--font-trocchi) mb-2">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-medium rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex gap-3">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
              >
                <IconBrandGithub size={20} />
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
              >
                <IconExternalLink size={20} />
              </a>
            )}
          </div>

          <Link href={`/work/${project.slug}`}>
            <Button variant="outline" size="sm" className="rounded-lg">
              Read More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}