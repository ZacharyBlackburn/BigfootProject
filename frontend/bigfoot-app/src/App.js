import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import BigfootNavbar from "./components/Navbar"
import HomePage from './pages/HomePage';
import UserContext from './contexts/UserContext.js';
import { getLoggedInUser, login, signupUser } from './api/UserAPI';
// import AddSighting from './components/AddSighting';
// import LandingPage from './components/LandingPage';
// import CarouselComponent from './components/CarouselComponent';


function App() {
  
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser ] = useState(null);
  const [error, setError] = useState(null);
  const [loginError, setLoginError] = useState(false);
  
  useEffect(() => {
    const getUser = async () => {
      if (localStorage.getItem("auth-user") !== 'null') {
        let response = await getLoggedInUser(localStorage.getItem("auth-user"));
        let data = await response.json();
        if (data.username) {
          setIsLoggedIn(true);
          setUser(data);
        }
      }
    }
    if (!user) {
      getUser();
    }
  }, [user])

  const handleLogin = async (evt) => {
    evt.preventDefault();
    let userObject = {
      username: evt.target.username.value,
      password: evt.target.password.value,
    }
    let response = await login(userObject);
    let data = await response.json();
    console.log(data)
    if (data.token) {
      setLoginError(false);
      localStorage.setItem("auth-user", `${data.token}`);
      setIsLoggedIn(true);
      setUser(data.user);
    }

  }
  

  const handleLogout = () => {
    localStorage.setItem("auth-user", null);
    setIsLoggedIn(false);
    setUser(null);
  }

  const handleSignup = async (evt) => {
    evt.preventDefault();
    let userObject = {
      'username': evt.target.username.value,
      'password': evt.target.password.value,
    }
    let response = await signupUser(userObject);
    let data = await response.json();
    console.log(data)
  }

  const [stateSelected, setStateSelected] = useState(false);


  return (
    <div className="App">
      <Router>
        <BigfootNavbar stateSelected={stateSelected} setStateSelected={setStateSelected} isLoggedIn={isLoggedIn} handleLogout={handleLogout} handleLogin={handleLogin} handleSignup={handleSignup} user={user}/>
        <UserContext.Provider value={{ user: user, setUser: handleLogin, error: error }}>
          <Routes>
            <Route path="/" element={<HomePage stateSelected={stateSelected} setStateSelected={setStateSelected} isLoggedIn={isLoggedIn} handleLogout={handleLogout} handleLogin={handleLogin} handleSignup={handleSignup} />} />
          </Routes>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;