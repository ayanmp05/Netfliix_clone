//Importing diff methods 
import React, { useEffect, useRef } from 'react'
import './Navbar.css'      //CSS
//Importing diff images
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'

const Navbar = () => {
  // Using useRef in navRef
  const navRef = useRef();
  //useEffect for making changes in navbar as per referrance
  useEffect(() => {
    // Adding eventlistner on scrool
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 80) {
        // Adding className as per scroll
        navRef.current.classList.add('nav-dark')
      } else {
        // Removing className as per scroll
        navRef.current.classList.remove('nav-dark')
      }
    })
  }, []) // Also an empty string

  return (
    // Implementing navRef as ref
    <div ref={navRef} className='navbar'>
      {/* Different div for left */}
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      {/* Different div for right */}
      <div className="navbar-right">
        <img src={search_icon} alt="" className='icons' />
        <p>Children</p>
        <img src={bell_icon} alt="" className='icons' />
        <div className="navbar-profile">
          <img src={profile_img} alt="" className='profile' />
          <img src={caret_icon} alt="" />
          <div className="dropdown">
            <p onClick={()=>{logout()}}>Sign Out</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar
