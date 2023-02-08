import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Home } from 'react-feather';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { Footer } from './Components/Footer/Footer';
import { Home } from './Components/Home/Home';
import { Login } from './Components/Login/Login';
import { Fortnite } from './Components/Page_One/Games/Fortnite/Fortnite';
import { Valorant } from './Components/Page_One/Games/Valorant/Valorant';
import { Page_One } from './Components/Page_One/Page_one';
import './index.css';

// New Router

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Page_one" element={<Page_One />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Page_one/Fortnite/" element={<Fortnite />} />
        <Route path="/Page_one/Fortnite/:id" element={<Fortnite />} />
        <Route path="/Page_one/Valorant" element={<Valorant />} />
        <Route path="/Page_one/Valorant/:id" element={<Valorant />} />
        <Route path="*" />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
