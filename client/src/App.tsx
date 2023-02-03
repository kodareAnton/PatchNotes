import './App.css';
import { Link, Route, Router, Routes } from 'react-router-dom';
import { Layout } from './Components/Layout/Layout';
import { Home } from './Components/Home/Home';
import { Page_One } from './Components/Page_One/Page_one';
import { Page_two } from './Components/Page_Two/Page_Two';
import { Fortnite } from './Components/Page_One/Games/Fortnite/Fortnite';
import { Login } from './Components/Login/Login';
import React from 'react';
import { Menu, X } from 'react-feather';
import { Footer } from './Components/Footer/Footer';

function App() {
  // öppna meny i mobil läge
  function OpenMenu() {
    var NavText: any = document.getElementById('navText');
    NavText.style.display = 'flex';
  }

  function closeMenu() {
    var NavText: any = document.getElementById('navText');
    NavText.style.display = 'none';
  }

  return (
    <>
      <nav>
        <Menu id="Menu" onClick={OpenMenu} />
        <img src="img/logoPokemon.png" alt="ChrismasLogo" id="logo"></img>
        <ul id="navText">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Page_One"> Games</Link>
          </li>
          {/* <li>
            <Link to="/Page_Two">Review</Link>
          </li> */}
          <li id="loginBtn">
            <Link to="/Login">Login</Link>
          </li>

          <X id="X" onClick={closeMenu} />
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Page_one" element={<Page_One />} />
        <Route path="/Page_Two" element={<Page_two />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
