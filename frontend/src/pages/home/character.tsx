import { createRef, useState, type RefObject } from "react";
import type { JSX } from "react/jsx-runtime";

export default function ChairCharacter(): JSX.Element
{
  const video: RefObject<HTMLVideoElement | null> = createRef<HTMLVideoElement>();
  const [state, setState] = useState<CharacterState>('idle');

  const endedCallback = () => {
    switch(state)
    {
      case 'idle':
      case 'crispy':
        // Loop the video.
        video.current?.play();
        break;
      case 'electrocuted':
        setState('crispy');
    }
  };

  return (
    <video className="character" src={`/images/characters/bf/${state}.webm`} onClick={() => setState('electrocuted')} onEnded={endedCallback} ref={video} autoPlay playsInline />
  );
}

type CharacterState = 'idle' | 'electrocuted' | 'crispy';