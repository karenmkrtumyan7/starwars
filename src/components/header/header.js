import React from 'react';
import "./header.css";
import { Link } from "react-router-dom";

function Header () {
    return (
        <header>
            <h1><Link to="/">Star DB</Link></h1>
            <ul>
                <li><Link to="/people/">People</Link></li>
                <li><Link to="/planets/">Planets</Link></li>
                <li><Link to="/starships/">Starships</Link></li>
            </ul>
        </header>
    )
}

export default Header;