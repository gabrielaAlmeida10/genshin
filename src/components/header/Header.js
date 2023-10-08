import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';



function Header() {
  return (
    <header id="main-header">
        <div className="header-content">
            <Link to="/">
              <h1>Genshin</h1>
             </Link>   
            <Link to="/pityCounter">
                <h3>Pity Counter</h3>
            </Link>
        </div>
    </header>
  );
}

export default Header;