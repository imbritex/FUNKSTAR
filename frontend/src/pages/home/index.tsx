import type { JSX } from "react/jsx-runtime";
import ChairCharacter from "./character";
import './style.css';

export default function HomePage(): JSX.Element
{
  return (
    <div>
      <div className="main-items">
        <img className="logo" src="/images/logo.svg" />
        <div className="desc-text">im bored</div>

        <div className="main-buttons">
          <button>Browse Mods</button>
        </div>
      </div>

      <ChairCharacter />
    </div>
  );
}