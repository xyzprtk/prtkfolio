"use client";

import Link from "next/link";
import { BlogPost } from "@/lib/blog";
import { IconArrowRight, IconCalendar, IconClock } from "@tabler/icons-react";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="group relative flex flex-col gap-3 rounded-xl border border-neutral-200 dark:border-white/10 bg-white/50 dark:bg-neutral-900/50 p-6 transition-all hover:bg-neutral-100 dark:hover:bg-neutral-800">
        
        {/* Date and Reading Time Row */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <IconCalendar size={14} />
            <time dateTime={post.date}>{post.date}</time>
          </div>
          <div className="flex items-center gap-1">
            <IconClock size={14} />
            <span>{post.readingTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold font-(family-name:--font-trocchi) group-hover:text-primary transition-colors">
          {post.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2">
          {post.description}
        </p>

        {/* Tags */}
        <div className="mt-2 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-2 py-0.5 text-[10px] uppercase tracking-wider font-semibold rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-500"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Read More Arrow (Visual cue) */}
        <div className="absolute top-6 right-6 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-primary">
          <IconArrowRight size={20} />
        </div>
      </div>
    </Link>
  );
}