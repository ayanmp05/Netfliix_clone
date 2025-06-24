//Importing diff methods according to usecases
import React, { useEffect, useState } from 'react'
//CSS
import './Player.css'
//Images
import back_arrow_icon from '../../assets/back_arrow_icon.png'
//Navigate to home
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {
  // Method to navigate to home
  const { id } = useParams();
  const navigate = useNavigate();
  // Setting API data to show us the realtive videos
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  })
  // Method to get Data of a specific video from API 
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNmRmNzNhZjRjYTU3ZjRkODRhZDdkNmU0MjFjN2Q2ZCIsIm5iZiI6MTc1MDU5Mjk2OS43MjYsInN1YiI6IjY4NTdlZGM5YWQ0YTk1OGRjM2E0NjUwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3OxPb8WyCh-mBgLvW1CWIs8PPYxVD_57E-lZUO-LeHM'
    }
  };

  useEffect(() => {
    // Using the fetched data from API
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results[0]))  //Setting value according to API
      .catch(err => console.error(err));

  }, [])


  return (
    <div className='player'>
      {/* Setting onlClick on img to return to home page */}
      <img src={back_arrow_icon} alt="" onClick={() => { navigate(-2) }} />
      {/* Setting video id from API key */}
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        {/* Showing data from API */}
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
