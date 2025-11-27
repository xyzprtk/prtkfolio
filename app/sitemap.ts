import type { MetadataRoute } from 'next'
import { getAllBlogs } from '@/lib/blog'
import { projects } from '@/data/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prtx.xyz'
  
  // Get all blog posts
  const blogs = getAllBlogs()
  const blogUrls = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(blog.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))
  
  // Get all projects
  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: new Date(), // You might want to add lastModified to your project data
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...blogUrls,
    ...projectUrls,
  ]
}