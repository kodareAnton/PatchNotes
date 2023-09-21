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
        {/* <Menu id="Menu" onClick={OpenMenu} />
        <img src="img/logoPokemon.png" alt="ChrismasLogo" id="logo"></img> */}
        <h1>
          <Link className="title" to="/">
            Patch Notes!
          </Link>
        </h1>
      </nav>
    </>
  );
}

export default App;
