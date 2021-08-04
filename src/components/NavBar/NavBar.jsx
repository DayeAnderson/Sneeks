import React from 'react';
import './NavBar.css'

const NavBar = ({ user, handleLogout }) => {
    return (
    <>
      {user ?
        <nav className="navbar-nav">
          <div className="nav-wrapper">
          <a className="left" href="/"><img src="https://fontmeme.com/permalink/210802/eb7a2a5fb941753a1dcfa40addb47be1.png" height='30' alt="beat-saber-font" border="0"/></a>
            <ul id="nav-mobile" className="right">
              <li><a href=" " className="nav-link">Welcome, {user.name}</a></li>
              <li><a className="nav-link-a" href="/sneakers">All Sneakers</a></li>
              <li><a href="/sneakers/add" className="nav-link">Add Sneaker</a></li>
              <li><a href=" " className="nav-link" onClick={handleLogout}>Log Out</a></li>
            </ul>
          </div>
        </nav>
      :
        <nav clasName="navbar-nav">
          <div className="nav-wrapper">
          <a className="left" href="/"><img src="https://fontmeme.com/permalink/210802/eb7a2a5fb941753a1dcfa40addb47be1.png" height='30' alt="beat-saber-font" border="0"/></a>
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