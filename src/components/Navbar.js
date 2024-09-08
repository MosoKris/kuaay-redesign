import React from 'react'
import "./Navbar.css";
import logo from "../Assets/Frame 385.png"

function navbar() {
  return (
    <nav className='navbar'>    
        <div className='navbar-logo'>
              <img src={logo} alt='kuaay logo' className='logo-img'></img>
            
        </div>
        <ul className='navbar-links'>
            <li><a href='#dealer'>Dealers</a></li>            
            <li><a href='#marketplaces'>Marketplaces</a></li>            
            <li><a href='#inviduals'>Individuals</a></li>            
            <li><a href='#signin'>Sign In</a></li>            
        </ul>
    </nav>
  )
}

export default navbar;
