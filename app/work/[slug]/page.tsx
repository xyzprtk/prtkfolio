import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { projects } from "@/data/projects";
import { getProjectContent } from "@/lib/mdx";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IconArrowLeft, IconCalendar } from "@tabler/icons-react";
import Image from "next/image";
import type { Metadata } from "next";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import ScrollToTop from "@/components/ScrollToTop";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// 1. Helper to find the project data from your static list
function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

// 2. Metadata Generator for SEO
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [{ url: project.image }],
    },
  };
}

// 3. Static Params Generation
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// 4. The Page Content
export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projectMeta = getProject(slug);
  const mdxResult = await getProjectContent(slug);

  if (!projectMeta || !mdxResult) {
    notFound();
  }

  const { content, frontmatter } = mdxResult;

  return (
    <div className="relative min-h-screen flex justify-center pb-20">
      <ScrollProgress className="top-0" />
      <main className="flex min-h-screen w-full max-w-3xl flex-col px-6 py-10 pt-32 bg-background/30">
        
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/work">
            <Button variant="ghost" className="pl-0 text-lg hover:bg-transparent cursor-pointer hover:text-primary gap-2">
              <IconArrowLeft size={18} />
              Back to Projects
            </Button>
          </Link>
        </div>

        {/* Header */}
        <header className="mb-10 space-y-6">
           {/* Hero Image */}
           <div className="relative w-full h-[200px] sm:h-[350px] rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800">
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
          
          <div className="flex flex-wrap items-center gap-4">
             {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2">
                {projectMeta.techStack.map((tech) => (
                <span key={tech} className="px-3 py-1 text-sm rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
                    {tech}
                </span>
                ))}
            </div>
            
            {/* Optional: Display Date from MDX Frontmatter if it exists */}
            {frontmatter.date && (
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <IconCalendar size={16} />
                    <span>{frontmatter.date}</span>
                </div>
            )}
          </div>

          <p className="text-lg text-muted-foreground border-l-4 border-primary pl-4 italic">
            {projectMeta.description}
          </p>
          
          <div className="border-b border-dashed border-neutral-200 dark:border-neutral-800 w-full pt-2" />
        </header>

        {/* MDX Content Area */}
        <article className="prose prose-lg prose-neutral dark:prose-invert max-w-none 
          prose-headings:font-(family-name:--font-trocchi) 
          prose-p:text-muted-foreground
          prose-a:text-primary hover:prose-a:underline
          prose-img:rounded-xl prose-img:border prose-img:border-neutral-200 dark:prose-img:border-neutral-800">
          {/* THIS IS THE FIX: We pass 'content' which has no metadata block */}
          <MDXRemote source={content} />
        </article>
      </main>
      <ScrollToTop />
    </div>
  );
}