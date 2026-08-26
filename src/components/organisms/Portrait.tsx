import React, { useEffect, useState } from 'react'
import { CONSTANTS } from '@atomic/../utils/constants'

/**
 * Portrait Component
 * Fetches and displays a random character portrait overlay on the screen
 */
export const Portrait = () => {
  const [portraitUrl, setPortraitUrl] = useState<string | null>(null)

  useEffect(() => {
    fetch(`${CONSTANTS.API_URL}/portraits`)
      .then(r => r.ok ? r.json() : [])
      .then(files => {
        if (files && files.length > 0) {
          const pick = files[Math.floor(Math.random() * files.length)]
          setPortraitUrl(`${CONSTANTS.API_URL}/portraits/${pick}`)
        }
      })
      .catch(() => {})
  }, [])

  if (!portraitUrl) return null

  return (
    <img 
      src={portraitUrl} 
      alt="Character Portrait"
      className="fixed bottom-0 right-0 h-[28vh] md:h-[55vh] [@media(min-aspect-ratio:16/9)]:h-[45vh] z-[100] pointer-events-none select-none"
      draggable={false}
    />
  )
}
