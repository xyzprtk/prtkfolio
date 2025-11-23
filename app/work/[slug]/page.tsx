// app/work/[slug]/page.tsx
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { projects } from "@/data/projects";
import { getProjectContent } from "@/lib/mdx";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IconArrowLeft } from "@tabler/icons-react";
import Image from "next/image";

// Force static generation for these paths (optional, good for SEO/Performance)
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  
  // 1. Get Metadata from your projects.ts array
  const projectMeta = projects.find((p) => p.slug === slug);
  
  // 2. Get MDX Content
  const content = await getProjectContent(slug);

  if (!projectMeta || !content) {
    notFound();
  }

  return (
    <div className="relative min-h-screen flex justify-center pb-20">
      <main className="flex min-h-screen w-full max-w-3xl flex-col px-6 py-10 pt-32 bg-background/30">
        
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/work">
            <Button variant="ghost" className="pl-0 hover:bg-transparent hover:text-primary gap-2">
              <IconArrowLeft size={18} />
              Back to Projects
            </Button>
          </Link>
        </div>

        {/* Header */}
        <header className="mb-10 space-y-6">
           {/* Hero Image for the Article */}
           <div className="relative w-full h-[300px] rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800">
              <Image 
                src={projectMeta.image} 
                alt={projectMeta.title}
                fill
                className="object-cover"
                priority
              />
           </div>

          <h1 className="text-3xl sm:text-5xl font-bold font-(family-name:--font-trocchi)">
            {projectMeta.title}
          </h1>
          
          <div className="flex flex-wrap gap-2">
            {projectMeta.techStack.map((tech) => (
               <span key={tech} className="px-3 py-1 text-sm rounded-full bg-neutral-100 dark:bg-neutral-800">
                 {tech}
               </span>
            ))}
          </div>

          <p className="text-lg text-muted-foreground border-l-4 border-primary pl-4 italic">
            {projectMeta.description}
          </p>
        </header>

        {/* MDX Content Area */}
        <article className="prose prose-neutral dark:prose-invert max-w-none 
          prose-headings:font-(family-name:--font-trocchi) 
          prose-p:text-muted-foreground
          prose-img:rounded-xl">
          <MDXRemote source={content} />
        </article>
      </main>
    </div>
  );
}