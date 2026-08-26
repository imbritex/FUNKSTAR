import React from 'react'
import mainLight from '@assets/images/ui/main-light.png'
import btnGlobalChat from '@assets/images/buttons/global-chat-button.png'
import btnMods from '@assets/images/buttons/mods-button.png'
import btnSignUp from '@assets/images/buttons/sign-up.png'
import { Portrait } from '../organisms/Portrait'

/**
 * Home Page View
 */
export const Home = () => {
  return (
    <div className="relative w-full min-h-screen">
      <Portrait />
      <img 
        src={mainLight} 
        alt="Top Left Light" 
        className="absolute -top-[6px] left-0 w-[25vw] z-[5] pointer-events-none"
      />
      
      <img 
        src={mainLight} 
        alt="Top Right Light" 
        className="absolute -top-[6px] right-0 w-[25vw] z-[5] -scale-x-100 pointer-events-none"
      />
      
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
              <button className="transition-transform hover:scale-105 active:scale-95 cursor-pointer bg-transparent border-none p-0">
                <img src={btnGlobalChat} alt="Global Chat" className="h-[2.5rem] md:h-[4rem] w-auto" draggable={false} />
              </button>
            </a>
            <a href="/mods">
              <button className="transition-transform hover:scale-105 active:scale-95 cursor-pointer bg-transparent border-none p-0">
                <img src={btnMods} alt="Discover Mods" className="h-[2.5rem] md:h-[4rem] w-auto" draggable={false} />
              </button>
            </a>
          </div>
          <a href="/signup" className="mt-2">
            <button className="transition-transform hover:scale-105 active:scale-95 cursor-pointer bg-transparent border-none p-0">
              <img src={btnSignUp} alt="Sign Up" className="h-[2.5rem] md:h-[4rem] w-auto" draggable={false} />
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
