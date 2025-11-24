'use client';
import { Trocchi } from "next/font/google";
import { IconBrandGithubFilled, IconBrandLinkedin, IconBrandX, IconPaperclip, IconMapPinFilled } from "@tabler/icons-react";

interface ProfileHeaderProps {
  name?: string
  age?: string
  title?: string
  profileImage?: string
  socialLinks?: {
    twitter?: string
    resume?: string
    github?: string
    linkedin?: string
  }
  location?: string
  fontSize?: number
}

const trochchi = Trocchi({
  variable: "--font-trocchi",
  subsets: ["latin"],
  weight: ["400"],
});

export default function ProfileHeader({
  name = "Pratheek Nistala",
  age = "22",
  title = "Data Engineer • Machine Learning",
  profileImage = "/profile.png",
  socialLinks = {
    twitter: "https://x.com/xyzprtk",
    github: "https://github.com/xyzprtk",
    linkedin: "https://www.linkedin.com/in/xyzprtk/",
    resume: "/resume.pdf",
  },
  location = "Hyderabad, India",
  fontSize = 20,
}: ProfileHeaderProps) {

  return (
    <div className="flex-col -mt-10">
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 mb-4 sm:ml-8 ml-4 z-10 rounded-full overflow-hidden">
        {/* Dark mode image */}
        <div
          className="absolute inset-0 bg-cover bg-top dark:block hidden"
          role="img"
          aria-label={name}
          style={{ backgroundImage: 'url("/profile.png")' }}
        />

        {/* Light mode image */}
        <div
          className="absolute inset-0 bg-cover bg-top dark:hidden block"
          role="img"
          aria-label={name}
          style={{ backgroundImage: 'url("/profile-light.png")' }}
        />
      </div>

      <div className="text-left sm:flex sm:justify-between sm:items-center w-full sm:px-8 px-4 flex-col sm:flex-row">
        <div className="px-0">
          <h1 className="font-(family-name:--font-trocchi) text-2xl sm:text-4xl tracking-[0.01em] font-medium mb-0">
            {name}
          </h1>
          <p className="text-muted-foreground sm:text-sm mt-3">
            {age} • {title}
          </p>
        </div>
        <div className="flex justify-start space-x-4 mt-3 sm:mt-0 px-0">
          {socialLinks.github && (
            <a
              className="hover:opacity-80 touch-manipulation active:opacity-75"
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
              <IconBrandGithubFilled size={18} />
            </a>
          )}
          {socialLinks.twitter && (
            <a
              className="hover:opacity-80 touch-manipulation active:opacity-75"
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
              <IconBrandX size={fontSize || 18} />
            </a>
          )}
          {socialLinks.resume && (
            <a
              className="hover:opacity-80 touch-manipulation active:opacity-75"
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
              <IconPaperclip size={fontSize || 18} />
            </a>
          )}
          {socialLinks.linkedin && (
            <a
              className="hover:opacity-80 touch-manipulation active:opacity-75"
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
              <IconBrandLinkedin size={fontSize || 18} />
            </a>
          )}
          {location && (
            <span className="relative inline-block group">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${location} in Google Maps`}
                className="inline-flex items-center justify-center hover:opacity-80 active:opacity-75 focus:outline-none"
              >
                <IconMapPinFilled size={fontSize || 18} />
              </a>

              {/* Tooltip */}
              <span
                role="tooltip"
                className="
        pointer-events-none 
        absolute left-1/2 -top-10 -translate-x-1/2 
        whitespace-nowrap rounded-md px-2 py-1 text-xs font-medium
        bg-neutral-900 text-white
        opacity-0 scale-95
        group-hover:opacity-100 group-focus-within:opacity-100
        group-hover:scale-100 group-focus-within:scale-100
        transition-opacity duration-150
        z-50
      "
              >
                {location}
              </span>
            </span>
          )}


        </div>
      </div>
    </div>
  )
}
