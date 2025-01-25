"use client"

import { useState, useEffect } from 'react'

export const useScreenWidth = (): number => {
  const [screenWidth, setScreenWidth] = useState<number>(0)

  useEffect(() => {
    // Check if the window object is defined to avoid issues with SSR
    if (typeof window !== 'undefined') {
      // Initialize the state with the current window width
      setScreenWidth(window.innerWidth)

      const handleResize = (): void => {
        setScreenWidth(window.innerWidth)
      }

      window.addEventListener('resize', handleResize)

      return (): void => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  return screenWidth
}
