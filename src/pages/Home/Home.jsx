import React from 'react'
//CSS
import './Home.css'
//Importing navbar in home
import Navbar from '../../components/Navbar/Navbar'
//Importing images in variable
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
//Importing titleCard in home
import TitleCards from '../../components/TitleCards/TitleCards'
//Importing Footer in home
import Footer from '../../components/Footer/Footer'


const Home = () => {
  return (
    <div className='home'>
      {/* Using navbar */}
      <Navbar></Navbar>
      <div className="hero">
        {/* setting hero image */}
        <img src={hero_banner} alt="" className='banner-img' />
        <div className="hero-caption">
          {/* Setting hero caption */}
          <img src={hero_title} alt="" className='caption-img' />
          <p>Discover his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.</p>
          <div className="hero-btns">
            {/* Setting buttons in hero image */}
            <button className='btn'><img src={play_icon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
          </div>
          {/* Using titleCard */}
          <TitleCards></TitleCards>
        </div>
      </div>
      {/* Div for more crads */}
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
        <TitleCards title={"Only on Netflix"} category={"popular"} />
        <TitleCards title={"Top Pics for you"} category={"upcoming"} />
        <TitleCards title={"Upcoming Movies"} category={"now_playing"} />
      </div>
      {/* Using Footer */}
      <Footer></Footer>
    </div>
  )
}

export default Home
