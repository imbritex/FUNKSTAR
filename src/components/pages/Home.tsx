import React from 'react'
import { Portrait } from '../organisms/Portrait'
import funkstarLogo from '@assets/images/ui/funkstar_logo.webp'

/**
 * Home Page View
 */
export const Home = () => {
  return (
    <div className="relative w-full min-h-screen">
      <Portrait />
      
      <div className="flex flex-col items-center justify-center min-h-screen relative z-[101]">
        <img src={funkstarLogo} alt="Funkstar" className="w-[80vw] max-w-[600px] mb-2 drop-shadow-lg pointer-events-none select-none" draggable={false} />
        <p className="text-[2rem] md:text-5xl text-center text-muted font-options font-bold drop-shadow-md mb-0">
          For Modders. By Modders.
        </p>

        <div className="mt-6 flex flex-col items-center gap-4">
          <a href="/mods">
            <button className="transition-transform hover:scale-105 active:scale-95 cursor-pointer bg-white/10 px-6 py-3 rounded-lg backdrop-blur-sm hover:bg-white/20 border-none text-2xl font-bold font-options">
              Browse Mods
            </button>
          </a>
        </div>

      </div>
    </div>
  )
}
