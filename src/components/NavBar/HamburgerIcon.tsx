import { motion } from 'motion/react'

interface HamburgerIconProps {
  isOpen: boolean
}

export default function HamburgerIcon({ isOpen }: HamburgerIconProps) {
  const transition = {
    duration: 0.3,
    ease: 'easeInOut',
  }

  return (
    <div className="relative flex h-6 w-6 flex-col items-center justify-center">
      {isOpen ? (
        // X icon (when open)
        <>
          <motion.span
            initial={{ rotate: 0 }}
            animate={{ rotate: 45 }}
            transition={transition}
            className="absolute h-0.5 w-5 rounded-full bg-slate-700"
          />
          <motion.span
            initial={{ rotate: 0 }}
            animate={{ rotate: -45 }}
            transition={transition}
            className="absolute h-0.5 w-5 rounded-full bg-slate-700"
          />
        </>
      ) : (
        // Hamburger icon (when closed)
        <>
          <motion.span
            className="absolute top-1.5 h-0.5 w-5 rounded-full bg-slate-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition}
          />
          <motion.span
            className="absolute h-0.5 w-5 rounded-full bg-slate-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition}
          />
          <motion.span
            className="absolute bottom-1.5 h-0.5 w-5 rounded-full bg-slate-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition}
          />
        </>
      )}
    </div>
  )
}
