import React from "react";
import { SplashText } from "../atoms/SplashText";
import { ChairCharacter } from "../atoms/ChairCharacter";
import funkstarLogo from "@assets/images/ui/funkstar_logo.webp";

/**
 * Home Page View
 */
export const Home = () => {
  return (
    <div className="relative w-full min-h-[100dvh]">
      <div className="flex flex-col items-center justify-center min-h-[100dvh] relative z-[101]">
        <img
          src={funkstarLogo}
          alt="Funkstar"
          className="w-[80vw] max-w-[600px] h-auto max-h-[25vh] md:max-h-[35vh] object-contain mb-2 drop-shadow-lg pointer-events-none select-none"
          draggable={false}
        />
        <SplashText />

        <div className="mt-6 flex flex-col items-center gap-4">
          <a href="/mods">
            <button className="transition-transform hover:scale-105 active:scale-95 cursor-pointer bg-zinc-900 px-6 py-3 md:px-8 md:py-4 rounded-lg hover:bg-zinc-800 border-2 border-zinc-700 text-xl md:text-2xl font-bold font-options text-white shadow-lg">
              Browse Mods
            </button>
          </a>
        </div>
      </div>
      <ChairCharacter />
    </div>
  );
};
