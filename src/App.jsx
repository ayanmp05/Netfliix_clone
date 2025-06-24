import React, { useEffect } from 'react'
//Importing Home page to App
import Home from './pages/Home/Home'
//Importing Route for path creating
import { Routes, Route, useNavigate } from 'react-router-dom'
//Importing Login page to App
import Login from './pages/Login/Login'
//Importing Player page to App
import Player from './pages/Player/Player'
//Importing method to change state on authentication
import { onAuthStateChanged } from 'firebase/auth'
//Importing auth from firebase db
import { auth } from './firebase'
//Importing Toast Notification style
import { ToastContainer, toast } from 'react-toastify';


const App = () => {
  //Using to navigate to diff pages
  const navigate = useNavigate();

  //Using useEffect to check the state and give the output
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("Logged In");
        // to go to home page
        navigate('/');
      } else {
        console.log("Logged Out");
        // to go to login page
        navigate('/login');
      }
    })
  }, [])
  return (
    <div>
      {/* Using toast notification in dark style */}
      <ToastContainer theme='dark'/>
      {/* Creating Rotes from home page to different pages */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/player/:id' element={<Player />} />
      </Routes>

    </div>
  )
}

export default App
