"use client";

import Link from "next/link";
import Image from "next/image";
import { ShimmerButton } from "@/components/ui/shimmer-button"; 
import { Trocchi } from "next/font/google";
import { cn } from "@/lib/utils";

const trocchi = Trocchi({
  variable: "--font-trocchi",
  subsets: ["latin"],
  weight: ["400"],
});

export default function BookCall() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-10 gap-8">
      {/* Text Section */}
      <div className={cn("text-center space-y-2", trocchi.className)}>
        <p className="text-lg sm:text-xl text-foreground/60 italic">
        If you're still reading, you're probably curious about my work.
        </p>
      </div>

      {/* Button Section */}
      <Link 
        href="https://cal.com/xyzprtk/15min"
        target="_blank"
        className="relative"
      >
        <ShimmerButton
          className="shadow-2xl"
          shimmerColor="#ffffff"
          shimmerSize="0.1em"
          borderRadius="100px"
          shimmerDuration="3s"
          background="rgba(0, 0, 0, 1)"
        >
          <div className="flex items-center gap-3 px-6 py-1">
            {/* Avatar Image */}
            <div className="relative w-6 h-6 rounded-full overflow-hidden border border-white/20">
              <Image
                src="/profile.png"
                alt="Profile"
                fill
                sizes="24px"
                className="object-cover"
              />
            </div>

            {/* Button Text */}
            <span className={cn(
              "text-sm font-medium text-white tracking-wide",
              trocchi.className
            )}>
              Book a Free Call
            </span>
          </div>
        </ShimmerButton>
      </Link>
    </section>
  );
}