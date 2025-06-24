//Importing diff methods according to usecases
import React, { useState } from 'react'
//CSS
import './Login.css'
//Importing Images
import logo from '../../assets/logo.png'
// Import login and signup function from database
import { login, signup } from '../../firebase'
//Importing loading animation
import netflix_spinner from '../../assets/netflix_spinner.gif'

const Login = () => {
  // Using methods to link Sign In and Sign Up pages
  const [signState, setSignState] = useState("Sign In");
  //Using metod to access and set user data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //loading state
  const [loading, setLoading] = useState(false);

  //User Authentication
  const user_auth = async (event) => {
    //Blocks to reload the page
    event.preventDefault();
    //setting loading animation
    setLoading(true);
    // Checking if it's Sign In or Sign Up
    if (signState === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
    //removing loading animation 
    setLoading(false);
  }

  return (
    //Implimenting loading screen
    loading?<div className="login-spinner">
      <img src={netflix_spinner} alt="" />
    </div>:
    <div className='login'>
      <img src={logo} className='login-logo' alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState == "Sign Up" ? <input value={name} onChange={(e) => { setName(e.target.value) }} type="text" placeholder='Your Name' /> : <></>}
          {/* Setting value and onChange to access the user data provided and store it to state variable */}
          <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder='Email' />
          <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder='Password' />
          {/* Setting onClick to submit the data */}
          <button onClick={user_auth} type='submit'>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>

        <div className="form-switch">
          {/* Form switch from Sign in to Sign up or vice-versa */}
          {signState == "Sign In" ? <p>New to Netflix? <span onClick={() => { setSignState("Sign Up") }}>Sign Up Now</span></p> : <p>Already have account? <span onClick={() => { setSignState("Sign In") }}>Sign In Now</span></p>}


        </div>
      </div>
    </div>
  )
}

export default Login
