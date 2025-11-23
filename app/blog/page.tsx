import { getAllBlogs } from "@/lib/blog";
import BlogCard from "@/components/BlogCard";
import { Trocchi } from "next/font/google";

const trocchi = Trocchi({
  variable: "--font-trocchi",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Blog - Pratheek Nistala",
  description: "Thoughts on code, Linux, and AI.",
};

export default function BlogPage() {
  const posts = getAllBlogs();

  return (
    <div className="relative min-h-screen flex justify-center">
      <main className="flex min-h-screen w-full max-w-4xl flex-col gap-10 px-6 py-10 pt-32 bg-background/30">
        <section className={trocchi.className}>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl m-6">
            Blog
          </h1>
          <p className="mt-6 text-lg text-muted-foreground px-6">
            Thoughts, tutorials, and rants about Engineering, AI, and Systems.
          </p>
        </section>

        {/* Blog Grid */}
        <section className="grid grid-cols-1 gap-4 px-6 pb-20">
          {posts.length > 0 ? (
            posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))
          ) : (
            <p className="text-muted-foreground italic">No posts found yet.</p>
          )}
        </section>
      </main>
    </div>
  );
}