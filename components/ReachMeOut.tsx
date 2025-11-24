'use client'
import { IconBrandLinkedin, IconBrandX, IconPaperclip, IconMail } from "@tabler/icons-react";
import { Tooltip } from "@/components/ui/tooltip";
import Image from "next/image";

interface ReachoutProps {
  title?: string
  subtitle?: string
  socialLinks?: {
    twitter?: string
    resume?: string
    github?: string
    linkedin?: string
    mail?: string
  }
}

export default function Reachout({
  title = "Let's Chat",
  subtitle = "I am available on these platforms",
  socialLinks = {
    twitter: "https://x.com/xyzprtk",
    github: "https://github.com/xyzprtk",
    linkedin: "https://www.linkedin.com/in/xyzprtk/",
    resume: "/resume.pdf",
    mail: "mailto:prtk@prtx.xyz"
  }
}: ReachoutProps) {
  return (
    <div className="sm:px-12 px-4 pb-8">
      <div className="text-left w-full">
        <div className="mb-4 sm:mb-6">
          <h2 className="font-trocchi text-lg text-foreground font-medium sm:text-xl mb-2 opacity-20 mt-4 sm:mt-6">
            {title}
          </h2>
          <p className="opacity-20 text-md sm:text-lg mb-3 sm:mb-4">
           {subtitle}
          </p>
        </div>
        
        <div className="flex justify-center sm:justify-start space-x-6 sm:space-x-0 sm:grid sm:grid-cols-2 lg:flex lg:justify-start sm:gap-4 lg:gap-6 lg:space-x-0">
        {socialLinks.github && (
  <Tooltip
    content={
      <a>
        @xyzprtk
      </a>
    }
  >
    <a
      className="flex items-center justify-center sm:justify-start space-x-0 sm:space-x-3 hover:opacity-80 transition-all duration-200 group p-3 sm:px-3 sm:py-3 lg:p-0 rounded-full sm:rounded-lg bg-gray-100/80 dark:bg-[hsl(0,3%,6.5%)] sm:bg-gray-50/50 sm:dark:bg-gray-800/30 lg:bg-transparent lg:dark:bg-transparent border border-gray-200/60 dark:border-gray-700/60 sm:border-gray-200/50 sm:dark:border-gray-700/50 lg:border-none hover:bg-gray-200/80 dark:hover:bg-gray-700/70 sm:hover:bg-gray-100/50 sm:dark:hover:bg-gray-700/40 lg:hover:bg-transparent lg:dark:hover:bg-transparent"
      href={socialLinks.github}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        WebkitTapHighlightColor: 'transparent',
        WebkitTouchCallout: 'none',
        WebkitUserSelect: 'none',
        userSelect: 'none'
      }}
    >

      {/* Light mode icon */}
      <Image
        src="/tech/github-dark.svg"
        alt="GitHub"
        width={20}
        height={20}
        className="block dark:hidden sm:size-[18px] group-hover:scale-110 transition-transform duration-200 shrink-0"
      />

      {/* Dark mode icon */}
      <Image
        src="/tech/github-light.svg"
        alt="GitHub (dark)"
        width={20}
        height={20}
        className="hidden dark:block sm:size-[18px] group-hover:scale-110 transition-transform duration-200 shrink-0"
      />

      <span className="hidden sm:inline text-sm font-medium dark:text-white/80 text-black/80 group-hover:text-[#006FEE] transition-colors duration-200">
        GitHub
      </span>
    </a>
  </Tooltip>
          )}
          
          {socialLinks.twitter && (
            <Tooltip content={
                <a>
                @xyzprtk
               </a>
            }>
              <a 
                className="flex items-center justify-center sm:justify-start space-x-0 sm:space-x-3 hover:opacity-80 transition-all duration-200 group p-3 sm:px-3 sm:py-3 lg:p-0 rounded-full sm:rounded-lg bg-gray-100/80 dark:bg-[hsl(0,3%,6.5%)] sm:bg-gray-50/50 sm:dark:bg-gray-800/30 lg:bg-transparent lg:dark:bg-transparent border border-gray-200/60 dark:border-gray-700/60 sm:border-gray-200/50 sm:dark:border-gray-700/50 lg:border-none hover:bg-gray-200/80 dark:hover:bg-gray-700/70 sm:hover:bg-gray-100/50 sm:dark:hover:bg-gray-700/40 lg:hover:bg-transparent lg:dark:hover:bg-transparent" 
                href={socialLinks.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  WebkitTapHighlightColor: 'transparent',
                  WebkitTouchCallout: 'none',
                  WebkitUserSelect: 'none',
                  userSelect: 'none'
                }}
              >
                <IconBrandX size={20} className="sm:size-[18px] group-hover:scale-110 transition-transform duration-200 shrink-0 text-gray-700 dark:text-gray-200 sm:text-gray-600 sm:dark:text-gray-300" />
                <span className="hidden sm:inline text-sm font-medium dark:text-white/80 text-black/80 group-hover:text-[#006FEE] transition-colors duration-200">
                  Twitter
                </span>
              </a>
            </Tooltip>
          )}
          
          {socialLinks.linkedin && (
            <Tooltip content={
                <a>
                @xyzprtk
               </a>
            }>
              <a 
                className="flex items-center justify-center sm:justify-start space-x-0 sm:space-x-3 hover:opacity-80 transition-all duration-200 group p-3 sm:px-3 sm:py-3 lg:p-0 rounded-full sm:rounded-lg bg-gray-100/80 dark:bg-[hsl(0,3%,6.5%)] sm:bg-gray-50/50 sm:dark:bg-gray-800/30 lg:bg-transparent lg:dark:bg-transparent border border-gray-200/60 dark:border-gray-700/60 sm:border-gray-200/50 sm:dark:border-gray-700/50 lg:border-none hover:bg-gray-200/80 dark:hover:bg-gray-700/70 sm:hover:bg-gray-100/50 sm:dark:hover:bg-gray-700/40 lg:hover:bg-transparent lg:dark:hover:bg-transparent" 
                href={socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  WebkitTapHighlightColor: 'transparent',
                  WebkitTouchCallout: 'none',
                  WebkitUserSelect: 'none',
                  userSelect: 'none'
                }}
              >
                <IconBrandLinkedin size={20} className="sm:size-[18px] group-hover:scale-110 transition-transform duration-200 shrink-0 text-gray-700 dark:text-gray-200 sm:text-gray-600 sm:dark:text-gray-300" />
                <span className="hidden sm:inline text-sm font-medium dark:text-white/80 text-black/80 group-hover:text-[#006FEE] transition-colors duration-200">
                  LinkedIn
                </span>
              </a>
            </Tooltip>
          )}

          {socialLinks.mail && (
            <Tooltip content="prtk@prtx.xyz">
              <a 
                className="flex items-center justify-center sm:justify-start space-x-0 sm:space-x-3 hover:opacity-80 transition-all duration-200 group p-3 sm:px-3 sm:py-3 lg:p-0 rounded-full sm:rounded-lg bg-gray-100/80 dark:bg-[hsl(0,3%,6.5%)] sm:bg-gray-50/50 sm:dark:bg-gray-800/30 lg:bg-transparent lg:dark:bg-transparent border border-gray-200/60 dark:border-gray-700/60 sm:border-gray-200/50 sm:dark:border-gray-700/50 lg:border-none hover:bg-gray-200/80 dark:hover:bg-gray-700/70 sm:hover:bg-gray-100/50 sm:dark:hover:bg-gray-700/40 lg:hover:bg-transparent lg:dark:hover:bg-transparent" 
                href={socialLinks.mail} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  WebkitTapHighlightColor: 'transparent',
                  WebkitTouchCallout: 'none',
                  WebkitUserSelect: 'none',
                  userSelect: 'none'
                }}
              >
                <IconMail size={20} className="sm:size-[18px] group-hover:scale-110 transition-transform duration-200 shrink-0 text-gray-700 dark:text-gray-200 sm:text-gray-600 sm:dark:text-gray-300" />
                <span className="hidden sm:inline text-sm font-medium dark:text-white/80 text-black/80 group-hover:text-[#006FEE] transition-colors duration-200">
                  Mail
                </span>
              </a>
            </Tooltip>
          )}
          
          {socialLinks.resume && (
              <a 
                className="flex items-center justify-center sm:justify-start space-x-0 sm:space-x-3 hover:opacity-80 transition-all duration-200 group p-3 sm:px-3 sm:py-3 lg:p-0 rounded-full sm:rounded-lg bg-gray-100/80 dark:bg-[hsl(0,3%,6.5%)] sm:bg-gray-50/50 sm:dark:bg-gray-800/30 lg:bg-transparent lg:dark:bg-transparent border border-gray-200/60 dark:border-gray-700/60 sm:border-gray-200/50 sm:dark:border-gray-700/50 lg:border-none hover:bg-gray-200/80 dark:hover:bg-gray-700/70 sm:hover:bg-gray-100/50 sm:dark:hover:bg-gray-700/40 lg:hover:bg-transparent lg:dark:hover:bg-transparent shrink-0 touch-manipulation" 
                href={socialLinks.resume} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  WebkitTapHighlightColor: 'transparent',
                  WebkitTouchCallout: 'none',
                  WebkitUserSelect: 'none',
                  userSelect: 'none'
                }}
              >
                <IconPaperclip size={24} className="group-hover:scale-110 transition-transform duration-200 shrink-0 text-gray-700 dark:text-gray-200 sm:text-gray-600 sm:dark:text-gray-300" />
                <span className="hidden sm:inline text-sm font-medium dark:text-white/80 text-black/80 group-hover:text-[#006FEE] transition-colors duration-200">
                  Resume
                </span>
              </a>
          )}
        </div>
      </div>
    </div>
  )
}
