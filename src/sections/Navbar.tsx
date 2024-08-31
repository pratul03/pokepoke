import React from 'react'
import pokeballIcon from "../assets/pokeball-icon.png"
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Navbar() {
  return (
    <nav>
      <div className="block">
        <img src={pokeballIcon} alt="pokeballIcon" />
      </div>
      <div className="data"></div>
      <div className="block">
        <GiHamburgerMenu />
      </div>
    </nav>
  )
}
