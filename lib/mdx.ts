import fs from "fs";
import path from "path";
import matter from "gray-matter";

const rootDirectory = path.join(process.cwd(), "content", "projects");

export async function getProjectContent(slug: string) {
  const filePath = path.join(rootDirectory, `${slug}.mdx`);
  
  try {
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return null;
    }

    const fileContent = fs.readFileSync(filePath, "utf8");
    
    // USE GRAY-MATTER HERE
    // 'data' is the metadata (title, date)
    // 'content' is the actual markdown body
    const { content, data } = matter(fileContent);
    
    return { content, frontmatter: data };
  } catch (error) {
    console.error("Error reading MDX file:", error);
    return null;
  }
}