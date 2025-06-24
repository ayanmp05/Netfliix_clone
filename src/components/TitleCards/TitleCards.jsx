//Importing diff methods
import React, { useEffect, useRef, useState } from 'react'
//CSS
import './TitleCards.css'
//Importing cards data from assets
import cards_data from '../../assets/cards/Cards_data'
//Importing Link for linking videos as per ID
import { Link } from 'react-router-dom';


//different const fro TitleCard properties
const TitleCards = ({ title, category }) => {
  // for getting data from api and set data as setApiData
  const [apiData, setApiData] = useState([]);
  //Using useRef as cardRef
  const cardsRef = useRef();

  //API 
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNmRmNzNhZjRjYTU3ZjRkODRhZDdkNmU0MjFjN2Q2ZCIsIm5iZiI6MTc1MDU5Mjk2OS43MjYsInN1YiI6IjY4NTdlZGM5YWQ0YTk1OGRjM2E0NjUwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3OxPb8WyCh-mBgLvW1CWIs8PPYxVD_57E-lZUO-LeHM'
    }
  };


  //hiding scrollbar from every TitleCards
  const handlewheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }
  //setting fetch data in useEffect in function
  useEffect(() => {
    // API fetch
    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results)) //setting it as per api
      .catch(err => console.error(err));
    //enabling scollwhell for scroll left
    cardsRef.current.addEventListener('wheel', handlewheel);
  }, [])

  return (
    <div className='title-cards'>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {/* Using map to get each API fetch data and use it accordingly */}
        {apiData.map((card, index) => {
          // Linking and returning it accordingly
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            {/* Image */}
            <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt="" />
            {/* Title */}
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards
