import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { Menu, X } from 'react-feather';

function App() {
  return (
    <>
      <nav>
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
