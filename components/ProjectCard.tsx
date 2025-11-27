"use client";

import Image from "next/image";
import Link from "next/link";
import { IconArrowRight, IconWorld } from "@tabler/icons-react";
import { Project } from "@/data/projects";
import { motion } from "motion/react";

interface ProjectCardProps {
  project: Project;
}

// Define the animation variants once to keep code clean
const expandVariants = {
  initial: { 
    width: 0, 
    opacity: 0,
    marginRight: 0 
  },
  hover: { 
    width: "auto", 
    opacity: 1,
    marginRight: 4 // Space between icon and text when expanded
  }
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 transition-all hover:shadow-lg h-full">
      {/* Image Section */}
      <div className="relative h-48 w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-100 dark:border-neutral-800">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-1 gap-4">
        <div>
          <h3 className="text-xl font-bold font-(family-name:--font-trocchi) hover:underline mb-2">
            <Link href={`/work/${project.slug}`}>{project.title}</Link>
          </h3>
          <p className="text-md text-muted-foreground line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-medium rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions Section */}
        <div className="flex items-center justify-between pt-4 mt-2 border-t border-dashed border-neutral-200 dark:border-neutral-800">
          <div className="flex gap-2">
            
            {/* Github Link */}
            {project.githubLink && (
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 justify-center rounded-full bg-neutral-100 dark:bg-neutral-800 text-foreground px-3 py-2 h-10 transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-700 cursor-pointer"
                initial="initial"
                whileHover="hover"
              >
                {/* Icon stays visible */}
                <div className="relative flex items-center justify-center">
                  <Image
                    src="/tech/github-dark.svg"
                    width={20}
                    height={20}
                    alt="GitHub"
                    className="block dark:hidden"
                  />
                  <Image
                    src="/tech/github-light.svg"
                    width={20}
                    height={20}
                    alt="GitHub (dark mode)"
                    className="hidden dark:block"
                  />
                </div>

                {/* Text expands on hover */}
                <motion.span
                  className="overflow-hidden whitespace-nowrap text-sm font-medium font-(family-name:--font-trocchi)"
                  variants={expandVariants}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  Github
                </motion.span>
              </motion.a>
            )}

            {/* Live Link */}
            {project.liveLink && (
              <motion.a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 justify-center rounded-full bg-neutral-100 dark:bg-neutral-800 text-foreground px-3 py-2 h-10 transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-700 cursor-pointer"
                initial="initial"
                whileHover="hover"
              >
                <IconWorld size={20} />
                <motion.span
                  className="overflow-hidden whitespace-nowrap text-sm font-medium font-(family-name:--font-trocchi)"
                  variants={expandVariants}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  Live Link
                </motion.span>
              </motion.a>
            )}
          </div>

          {/* Read More Link */}
          <Link href={`/work/${project.slug}`}>
            <motion.button
              className="flex items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800 text-foreground px-3 py-2 h-10 transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-700 cursor-pointer"
              initial="initial"
              whileHover="hover"
            >
              <motion.span
                className="overflow-hidden whitespace-nowrap text-sm font-medium font-(family-name:--font-trocchi)"
                variants={expandVariants}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                Read More
              </motion.span>
              <IconArrowRight size={18} />
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
}