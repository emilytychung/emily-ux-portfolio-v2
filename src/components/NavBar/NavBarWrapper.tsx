'use client'
import React, { useState, useRef, useEffect } from 'react'
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'motion/react'
import cn from '@/lib/utils/cn'

interface NavBarWrapperProps {
  className?: string
  children: React.ReactNode
  isMenuOpen?: boolean
  menuContent?: React.ReactNode
}

export default function NavBarWrapper({
  children,
  className,
  isMenuOpen = false,
  menuContent,
}: NavBarWrapperProps) {
  const { scrollYProgress } = useScroll()
  const [visible, setVisible] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === 'number') {
      const direction = current - (scrollYProgress.getPrevious() || 0)

      if (scrollYProgress.get() < 0.05) {
        setVisible(false)
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
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
          borderRadius: isMenuOpen ? 30 : 50,
        }}
        transition={{
          duration: 0.2,
          borderRadius: {
            duration: 0.4,
            ease: 'easeInOut',
          },
        }}
        className={cn(
          'fixed inset-x-0 top-6 z-[5000] mx-auto flex w-[90vw] max-w-fit flex-col items-center justify-center border border-slate-100 bg-white px-4 py-2 shadow-[0px_4px_4px_rgba(0,0,0,0.06),0px_4px_28px_rgba(17,25,38,0.11)]',
          className
        )}
      >
        <div className="w-full">{children}</div>

        <AnimatePresence>
          {isMenuOpen && menuContent && (
            <motion.div
              ref={contentRef}
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: 'auto',
                opacity: 1,
                transition: {
                  height: { duration: 0.3, ease: 'easeInOut' },
                  opacity: { duration: 0.2, delay: 0.1 },
                },
              }}
              exit={{
                height: 0,
                opacity: 0,
                transition: {
                  height: { duration: 0.3, ease: 'easeInOut' },
                  opacity: { duration: 0.2 },
                },
              }}
              className="w-full overflow-hidden"
            >
              <div className="py-4">{menuContent}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </AnimatePresence>
  )
}
