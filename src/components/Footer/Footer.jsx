import React from 'react'
import './Footer.css'  //CSS
//Importing Images in variable
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      {/* Div for footer icons */}
      <div className="footer-icons">
        {/* Using footer images in img tag */}
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={youtube_icon} alt="" />
      </div>
      {/* Creating ul for storing different list items */}
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legaal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Info</li>
        <li>Contact Us</li>
      </ul>
      {/* Another p tag for special caes */}
      <p className='copyright-text'>©1997-2025 Netflix, Inc.</p>
    </div>
  )
}

export default Footer
