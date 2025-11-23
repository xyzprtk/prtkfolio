'use client'

interface SectionBorderProps {
  className?: string
}

export default function SectionBorder({ className = '' }: SectionBorderProps) {
  return (
    <div className={`border-b border-dashed dark:border-white/15 border-black/15 ${className}`} />
  )
}
