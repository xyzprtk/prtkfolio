// lib/mdx.ts
import fs from "fs";
import path from "path";

const rootDirectory = path.join(process.cwd(), "content", "projects");

export async function getProjectContent(slug: string) {
  const filePath = path.join(rootDirectory, `${slug}.mdx`);
  
  try {
    const fileContent = fs.readFileSync(filePath, "utf8");
    return fileContent;
  } catch (error) {
    return null;
  }
}