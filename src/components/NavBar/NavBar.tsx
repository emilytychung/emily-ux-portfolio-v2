'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import useMediaQuery from '@/lib/hooks/useMediaQuery'

// Use dynamic imports for better code splitting
const MobileNavBar = dynamic(() => import('./MobileNavBar'))
const DesktopNavBar = dynamic(() => import('./DesktopNavBar'))

// This empty component will render server-side initially before hydration
const NoSSRPlaceholder = () => <div className="h-16" />

interface NavBarProps {
  className?: string
}

export default function NavBar({ className }: NavBarProps) {
  // Check if we're on a viewport that matches the tablet+ breakpoint
  const isTabletOrDesktop = useMediaQuery('(min-width: 481px)')

  // Before hydration is complete, we don't want to render any specific NavBar
  // to avoid hydration mismatch. After hydration, we'll render the appropriate one.
  const [isClient, setIsClient] = React.useState(false)

  React.useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    // Return empty div with same height while waiting for client hydration
    return <NoSSRPlaceholder />
  }

  // Render the appropriate navbar based on the current breakpoint
  return isTabletOrDesktop ? <DesktopNavBar /> : <MobileNavBar />
}
