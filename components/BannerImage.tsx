'use client'

import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import BannerOverlay from '@/components/BannerOverlay'

interface BannerSectionProps {
  quote?: string
  bannerImage?: string
}

export default function BannerSection({
  quote = "Experiment • Validate • Ship • Iterate",
  bannerImage
}: BannerSectionProps) {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  //Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const currentTheme = mounted ? (resolvedTheme || theme) : 'dark'
  const defaultImage = currentTheme === 'dark' ? '/rocket.png' : '/rocket-light.png'
  const imageSrc = bannerImage || defaultImage
  //Show placeholder during mounting to prevent flash
  if (!mounted) {
    return (
      <div className="w-full mb-2 relative">
        <div className="relative rounded-lg w-full h-[200px] sm:h-[270px] bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
      </div>
    )
  }

  return (
    <div className="w-full mb-2 relative">
      <div className="relative" style={{ height: 'auto' }}>
        <Image
          alt="Banner"
          width={1240}
          height={900}
          className="rounded-lg w-full h-[200px] sm:h-[270px] object-cover"
          src={imageSrc}
          style={{ color: 'transparent', minHeight: '100px' }}
          priority = {true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
        />
        <BannerOverlay position="top" />
        <BannerOverlay position="bottom" />
        <BannerOverlay position="left" />
        <BannerOverlay position="right" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <p className="dark:text-white/60 text-black/60 text-base sm:text-xl italic font-trocchi text-center">{quote}</p>
        </div>
      </div>
    </div>
  )
}
