// app/work/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Pratheek Nistala", // %s will be replaced by the specific project title
    default: "Proof of Work | Pratheek Nistala", // Fallback for the main /work page
  },
  description: "Showcase of my projects in Data Engineering, Machine Learning, and Full Stack Development.",
  openGraph: {
    title: "Pratheek Nistala - Proof of Work",
    description: "Showcase of my projects in Data Engineering, Machine Learning, and Full Stack Development.",
    url: "https://prtx.xyz/work", // Replace with your actual domain
    siteName: "Pratheek Nistala",
    locale: "en_US",
    type: "website",
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}