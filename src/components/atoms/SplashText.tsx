import React, { useMemo, useState, useEffect } from 'react'
import splashData from '@assets/splash-text.txt?raw'

/**
 * SplashText Component
 * Displays a random splash text split by "--"
 */
export const SplashText = () => {
  const [randomSplash, setRandomSplash] = useState<string[]>(['', ''])

  useEffect(() => {
    const splashLines = splashData
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0)
    
    if (splashLines.length > 0) {
      const pick = splashLines[Math.floor(Math.random() * splashLines.length)]
      setRandomSplash(pick.split('--').map(s => s.trim()))
    } else {
      setRandomSplash(['missing', 'splash text'])
    }
  }, [])

  return (
    <div className="flex flex-col items-center justify-center text-muted font-options font-bold drop-shadow-md mb-0">
      {randomSplash.map((line, idx) => (
        <p key={idx} className="text-[2rem] md:text-5xl text-center m-0 leading-tight">
          {line}
        </p>
      ))}
    </div>
  )
}
