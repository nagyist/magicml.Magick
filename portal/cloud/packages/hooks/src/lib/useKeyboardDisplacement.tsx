"use client"

import { useState, useEffect } from 'react'

export function useKeyboardDisplacement() {
  const [initialViewHeight, setInitialViewHeight] = useState(0)
  const [displacement, setDisplacement] = useState(0)

  useEffect(() => {
    if (!window?.visualViewport) return

    const isMobile =
      /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(
        navigator.userAgent
      )

    if (!isMobile) {
      return // Early return if not on mobile
    }

    function handleResize() {
      if (!window.visualViewport) return
      const displacementValue = initialViewHeight - window.visualViewport.height
      setDisplacement(displacementValue > 0 ? displacementValue : 0)
    }

    // Set initial height on first run
    setInitialViewHeight(window.visualViewport.height)

    // Listen for resize events
    window.visualViewport.addEventListener('resize', handleResize)

    // Cleanup listener on unmount
    return () => {
      if (!window.visualViewport) return
      window.visualViewport.removeEventListener('resize', handleResize)
    }
  }, [initialViewHeight])

  return displacement
}
