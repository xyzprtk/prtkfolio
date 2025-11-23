'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Trocchi } from 'next/font/google'

const trocchi = Trocchi({
  variable: "--font-trocchi",
  subsets: ["latin"],
  weight: ["400"],
});

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  description: string;
  href?: string;
  logoUrl?: string;
}

export default function ExperienceContent() {
  const experiences: ExperienceItem[] = [
    {
      company: "Dun and Bradstreet",
      position: "Data Engineering Intern ( Risk Analyst)",
      duration: "June 2025 – Present",
      description: "Developed and deployed cutting-edge solutions, including multi-select preferences, browser-based video recording, and API integrations like WhatsApp/email reminders. Optimized workflows with autosave features and real-time scraping, leveraging Next.js, Supabase, and Cloudflare workers.",
      href: "https://www.dnb.com/",
      logoUrl: "/dnb.svg",
    },
  ];

  return (
    <div className="space-y-6 dark:text-white/70 text-black/70 pb-4">
      <div className={`${trocchi.className} text-xl font-bold m-4`}>Proffessional Experience</div>
      {experiences.map((exp) => (
        <div key={exp.company} className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
            {/* Left side - Logo, Company & Position */}
            <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
              {/* Company Logo */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center overflow-hidden shrink-0">
                {exp.logoUrl ? (
                  <Image 
                    src={exp.logoUrl} 
                    alt={exp.company}
                    width={18}
                    height={18}
                    className="w-full h-full object-contain object-top"
                  />
                ) : (
                  <span className="text-sm sm:text-lg font-medium dark:text-white text-black">
                    {exp.company.charAt(0)}
                  </span>
                )}
              </div>
              
              {/* Company Info */}
              <div className="flex-1 min-w-0">
                <h3 className="font-medium dark:text-white text-black text-sm sm:text-lg">
                  {exp.href ? (
                    <Link 
                      href={exp.href} 
                      target="_blank" 
                      className="hover:text-[#006FEE] transition-colors"
                    >
                      {exp.company}
                    </Link>
                  ) : (
                    exp.company
                  )}
                </h3>
                <p className="text-[10px] sm:text-sm opacity-70">
                  {exp.position}
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm opacity-70 pl-13 sm:pl-16 leading-relaxed">
              {exp.duration}
            </p>
          </div>
          
          {/* Description */}
          <div className="pl-13 sm:pl-16">
            <p className="text-xs sm:text-sm leading-relaxed opacity-80">
              {exp.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
