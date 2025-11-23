// app/blog/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Pratheek Nistala", // %s will be replaced by the specific blog title
    default: "Blog | Pratheek Nistala", // Fallback for the main /blog page
  },
  description: "Writing about Engineering, Systems, and AI.",
  openGraph: {
    title: "Pratheek Nistala - Blog",
    description: "Writing about Engineering, Systems, and AI.",
    url: "https://prtx.xyz/blog", // Replace with your actual domain
    siteName: "Pratheek Nistala",
    locale: "en_US",
    type: "website",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* You can add a reading progress bar or specific blog nav here in the future */}
      {children}
    </>
  );
}