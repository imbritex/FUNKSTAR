import React from 'react'
import bgImage from '@assets/images/ui/funkstar_bg.webp'

/**
 * Background Component
 * Renders the global fixed background image for ALL the application.
 */
export const Background = () => {
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen bg-cover bg-center bg-no-repeat -z-10"
      style={{ backgroundImage: `url(${bgImage})` }}
    />
  )
}
