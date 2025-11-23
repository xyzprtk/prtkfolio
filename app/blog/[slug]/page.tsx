// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllBlogs, getBlogBySlug } from "@/lib/blog";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IconArrowLeft, IconCalendar, IconClock } from "@tabler/icons-react";
import { cache } from "react";
import type { Metadata } from "next";

// 1. Optimize Data Fetching
// This ensures we only read the file system once per request,
// even though we call it in both generateMetadata and the component.
const getPost = cache(async (slug: string) => {
  return getBlogBySlug(slug);
});

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// 2. The Metadata Generator
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title, // This gets inserted into the %s in layout.tsx
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: ["Pratheek Nistala"],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

// 3. Static Params Generation
export async function generateStaticParams() {
  const posts = getAllBlogs();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// 4. The Page Content
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="relative min-h-screen flex justify-center pb-20">
      <main className="flex min-h-screen w-full max-w-3xl flex-col px-6 py-10 pt-32 bg-background/30">
        
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/blog">
            <Button variant="ghost" className="pl-0 hover:bg-transparent hover:text-primary gap-2">
              <IconArrowLeft size={18} />
              Back to Blog
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-10 space-y-6 border-b border-dashed border-neutral-200 dark:border-white/10 pb-10">
          
          <div className="flex gap-4 text-sm text-muted-foreground mb-4">
             <span className="flex items-center gap-1">
                <IconCalendar size={16} /> {post.date}
             </span>
             <span className="flex items-center gap-1">
                <IconClock size={16} /> {post.readingTime}
             </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold font-(family-name:--font-trocchi) leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
               <span key={tag} className="px-3 py-1 text-sm rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
                 #{tag}
               </span>
            ))}
          </div>
        </header>

        {/* MDX Content */}
        <article className="prose prose-lg prose-neutral dark:prose-invert max-w-none 
          prose-headings:font-(family-name:--font-trocchi) 
          prose-a:text-primary hover:prose-a:underline
          prose-img:rounded-xl prose-img:border prose-img:border-neutral-200 dark:prose-img:border-neutral-800">
          <MDXRemote source={post.content} />
        </article>
      </main>
    </div>
  );
}