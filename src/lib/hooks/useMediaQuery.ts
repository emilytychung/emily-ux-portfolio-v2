'use client'
import { useState, useEffect } from 'react'

/**
 * Custom hook to check if the current viewport matches a media query
 * @param query Media query string (e.g., '(min-width: 768px)')
 * @returns Boolean indicating if the viewport matches the query
 */
export default function useMediaQuery(query: string): boolean {
  // Start with a default that won't cause hydration mismatch
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    // Set initial value once we're on the client
    const media = window.matchMedia(query)
    setMatches(media.matches)

    // Update matches when viewport changes
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }

    // Add and remove listener
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [query])

  return matches
}
