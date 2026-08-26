import React from 'react'
import { Portrait } from '../organisms/Portrait'

/**
 * Home Page View
 */
export const Home = () => {
  return (
    <div className="relative w-full min-h-screen">
      <Portrait />
      
      <div className="flex flex-col items-center justify-center min-h-screen relative z-[101]">
        <h1 className="text-[3.5rem] md:text-8xl mb-0 text-center font-linglong text-title tracking-wider font-bold">
          FUNKSTAR
        </h1>
        <p className="text-[2rem] md:text-5xl text-center text-muted font-options font-bold drop-shadow-md mb-0">
          For Modders. By Modders.
        </p>

        <div className="mt-6 flex flex-col items-center gap-4">
          <div className="flex md:flex-row flex-col items-center gap-4 md:gap-8">
            <a href="/global-chat">
              <button className="transition-transform hover:scale-105 active:scale-95 cursor-pointer bg-white/10 px-6 py-3 rounded-lg backdrop-blur-sm hover:bg-white/20 border-none text-2xl font-bold font-options">
                Global Chat
              </button>
            </a>
            <a href="/mods">
              <button className="transition-transform hover:scale-105 active:scale-95 cursor-pointer bg-white/10 px-6 py-3 rounded-lg backdrop-blur-sm hover:bg-white/20 border-none text-2xl font-bold font-options">
                Discover Mods
              </button>
            </a>
          </div>
          <a href="/signup" className="mt-2">
            <button className="transition-transform hover:scale-105 active:scale-95 cursor-pointer bg-white/10 px-6 py-3 rounded-lg backdrop-blur-sm hover:bg-white/20 border-none text-2xl font-bold font-options">
              Sign Up
            </button>
          </a>
        </div>

        <a 
          href="/about" 
          className="block mt-4 font-options text-[3rem] text-muted no-underline text-center tracking-[0.05em] transition-colors hover:text-muted-hover"
        >
          About the Site
        </a>

      </div>
    </div>
  )
}
