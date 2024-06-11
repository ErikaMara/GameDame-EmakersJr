import React, { useState } from 'react'
import { PiLineVerticalThin } from "react-icons/pi";
import SearchBar from "../Components/SearchBar";

function NavBar() {
    return (
        <div className='navBar'>
            <a href='/home'>
            <img src="src/Images/logo.png" alt="GameDame" title="GameDame"></img></a>
            <a href="#" title="Lançamentos">Lançamentos</a>
            <PiLineVerticalThin />
            <a href="#" title="Populares">Populares</a>
            <PiLineVerticalThin />
            <a href="#" title="Gêneros">Gêneros</a>
            <PiLineVerticalThin />
            <a href="#" title="Promoções">Promoções</a>
            <PiLineVerticalThin />
            <a href="/profile" title="Conta">Conta</a>
            <SearchBar />
        </div>
    )
}

export default NavBar