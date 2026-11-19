'use client'

import { useEffect, useState } from 'react'

export function ScrollProgress() {
  const [mounted, setMounted] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setMounted(true)
    const onScroll = () => {
      const scrollTop = window.scrollY
      const height =
        document.documentElement.scrollHeight - window.innerHeight
      setProgress(height > 0 ? (scrollTop / height) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-1 bg-transparent">
      <div
        className="h-full bg-gold transition-[width] duration-150 ease-out"
        style={{ width: mounted ? `${progress}%` : '0%' }}
        aria-hidden="true"
        suppressHydrationWarning
      />
    </div>
  )
}
