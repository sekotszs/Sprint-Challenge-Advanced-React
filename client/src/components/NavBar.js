import React, { useState } from 'react';
import {useDarkMode} from "../hooks/useDarkMode"



const Navbar = () => {
    const [ darkMode, setDarkMode ] = useDarkMode(false)
    return (
    <div style={{ background: 'lightpink', width: "10%", height: 50, }}>
        <button onClick={() => setDarkMode(!darkMode)}>Dark Mode</button>
    </div>
    )
}

export default Navbar;
