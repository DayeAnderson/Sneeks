import React from 'react';
import './NavBar.css'

const NavBar = ({ user, handleLogout }) => {
    return (
    <>
      {user ?
        <nav classname="navbar-nav">
          <div className="nav-wrapper">
          <a classname="left" href="/"><img src="https://fontmeme.com/permalink/210621/0b3ceaa036cdb35571cb496f863c43ea.png" height='30' alt="beat-saber-font" border="0"/></a>
            <ul id="nav-mobile" className="right">
              <li><a href=" " className="nav-link">Welcome, {user.name}</a></li>
              <li><a href=" " className="nav-link" onClick={handleLogout}>Log Out</a></li>
            </ul>
          </div>
        </nav>
      :
        <nav>
          <div className="nav-wrapper">
          <a classname="left" href="/"><img src="https://fontmeme.com/permalink/210621/0b3ceaa036cdb35571cb496f863c43ea.png" height='30' alt="beat-saber-font" border="0"/></a>
            <ul id="nav-mobile" className="right">
              <li><a href="/login" className="nav-link">Log In</a></li>
              <li><a href="/signup" className="nav-link">Sign Up</a></li>
            </ul>
          </div>
        </nav>
      }
    </>
  )
}

export default NavBar;
