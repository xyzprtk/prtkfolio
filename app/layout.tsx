import type { Metadata } from "next";
import { Geist, Geist_Mono, Trocchi } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import NavbarComponent from "@/components/NavBar";
import GridPatternBackground from "@/components/ui/grid-pattern-background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // SEO: Prevent layout shift
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const trocchi = Trocchi({
  variable: "--font-trocchi",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

// SEO Configuration
const siteConfig = {
  name: "Pratheek Nistala",
  title: "Pratheek Nistala - Data Scientist | Engineer",
  description: "Data Engineer specializing in scalable data pipelines, machine learning, and full-stack development. Explore my portfolio of data science projects, technical blog posts, and engineering insights.",
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://prtx.xyz',
  ogImage: '/og-image.png', 
  creator: '@xyzprtk', // Your Twitter handle
  keywords: [
    'Data Scientist',
    'Data Engineer',
    'Full Stack Developer',
    'Machine Learning',
    'Python Developer',
    'Data Science',
    'Software Engineer',
    'Portfolio',
    'Technical Blog',
    'Data Pipelines',
    'Big Data',
    'Cloud Computing',
    'AI',
    'RAG',
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  
  // Basic Metadata
  title: {
    default: siteConfig.title,
    template: '%s | Pratheek Nistala' // This allows child pages to set their titles
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    }
  ],
  creator: siteConfig.name,
  
  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      }
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    creator: siteConfig.creator,
    images: [siteConfig.ogImage],
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Verification (add these after creating accounts)
  verification: {
    google: 'cBEe8oJicyXne0jMbRcGvTPNnPqkksWM5-C9zZltVQ0',
    // yandex: 'your-yandex-verification',
    // bing: 'your-bing-verification',
  },
  
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark"
      style={{ colorScheme: "dark" }}
    >
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Pratheek Nistala",
              "url": siteConfig.url,
              "jobTitle": "Data Scientist | Engineer",
              "description": siteConfig.description,
              "image": `${siteConfig.url}${siteConfig.ogImage}`,
              "sameAs": [
                "https://github.com/xyzprtk", // Update with your actual profiles
                "https://linkedin.com/in/xyzprtk",
                "https://twitter.com/xyzprtk",
              ],
              "knowsAbout": [
                "Data Engineering",
                "Machine Learning",
                "Python",
                "Full Stack Development",
                "Big Data",
                "Cloud Computing"
              ],
            })
          }}
        />
      </head>
      <body
        className={`${trocchi.variable} ${geistMono.variable} antialiased relative`}
      >
        <GridPatternBackground
          className="pointer-events-none fixed inset-0 z-0"
          gridType="lines"
          gridSize={16}
          opacity={0.1}
          animate={false}
        />
        <Providers>
          <div className="relative z-10">
            <NavbarComponent />
            {children}
          </div>
        </Providers>
        <script
          src="https://cdn.databuddy.cc/databuddy.js"
          data-client-id="-WfdBGCX0UChXhO5Z-tqm"
          data-enable-batching="true"
          crossOrigin="anonymous"
          async
        ></script>
      </body>
    </html>
  );
}
