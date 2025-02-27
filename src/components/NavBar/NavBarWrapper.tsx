'use client'
import React, { useState } from 'react'
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion'
import cn from '@/lib/utils/cn'

interface NavBarWrapperProps {
  className?: string
  children: React.ReactNode
}

export default function NavBarWrapper({
  children,
  className,
}: NavBarWrapperProps) {
  const { scrollYProgress } = useScroll()
  const [visible, setVisible] = useState(true)

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === 'number') {
      const direction = current - (scrollYProgress.getPrevious() || 0)

      if (scrollYProgress.get() < 0.05) {
        setVisible(true) // Always show navbar at the top of the page
      } else {
        if (direction < 0) {
          setVisible(true) // Show when scrolling up
        } else {
          setVisible(false) // Hide when scrolling down
        }
      }
    }
  })

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          'fixed inset-x-0 top-6 z-[5000] mx-auto flex max-w-fit items-center justify-center rounded-full border border-slate-100 bg-white px-4 py-2 shadow-[0px_4px_4px_rgba(0,0,0,0.06),0px_4px_28px_rgba(17,25,38,0.11)]',
          className
        )}
      >
        {children}
      </motion.nav>
    </AnimatePresence>
  )
}
