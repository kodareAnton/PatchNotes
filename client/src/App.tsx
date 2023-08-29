import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home/Home';
import { Menu, X } from 'react-feather';

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
        <h1>
          <Link to="/">Patch Notes!</Link>
        </h1>
        <ul id="navText">
          {/* <li>
            <Link to="/">Home</Link>
          </li> */}
          <li>
            <Link to="/"> Games</Link>
          </li>
          {/* <li id="loginBtn">
            <Link to="/Login">Login</Link>
          </li> */}
          <X id="X" onClick={closeMenu} />
        </ul>
      </nav>
    </>
  );
}

export default App;
