import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { Layout } from './Components/Layout/Layout';
import { Home } from './Components/Home/Home';
import { Page_One } from './Components/Page_One/Page_one';
import { Page_two } from './Components/Page_Two/Page_Two';
import { Fortnite } from './Components/Page_One/Games/Fortnite/Fortnite';
import { Login } from './Components/Login/Login';
import React from 'react';
import { Camera, Battery } from 'react-feather';

function App() {
  return (
    <>
      <nav>
        <img src="img/Logo-regular.jpg" alt="ChrismasLogo" id="logo"></img>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Page_One"> Games</Link>
          </li>
          <li>
            <Link to="/Page_Two">Review</Link>
          </li>
          <li id="loginBtn">
            <Link to="/Login">Login</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Page_one" element={<Page_One />} />
        <Route path="/Page_Two" element={<Page_two />} />
        <Route path="/Page_one/Fortnite" element={<Fortnite />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
