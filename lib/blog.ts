import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDirectory = path.join(process.cwd(), "content", "blogs");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  content: string; // The raw MDX content
  readingTime?: string;
}

export function getAllBlogs(): BlogPost[] {
  // 1. Get files from the content directory
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(blogDirectory);

  const allBlogs = fileNames.map((fileName) => {
    // 2. Remove ".mdx" from file name to get slug
    const slug = fileName.replace(/\.mdx$/, "");

    // 3. Read file contents
    const fullPath = path.join(blogDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // 4. Use gray-matter to parse the post metadata section
    const { data, content } = matter(fileContents);

    // 5. Calculate crude reading time (200 words per minute)
    const wordCount = content.split(/\s+/g).length;
    const readingTime = `${Math.ceil(wordCount / 200)} min read`;

    return {
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
      tags: data.tags || [],
      content,
      readingTime
    };
  });

  // Sort posts by date (newest first)
  return allBlogs.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getBlogBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(blogDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    
    // Calculate reading time
    const wordCount = content.split(/\s+/g).length;
    const readingTime = `${Math.ceil(wordCount / 200)} min read`;

    return {
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
      tags: data.tags || [],
      content,
      readingTime
    };
  } catch (error) {
    return null;
  }
}