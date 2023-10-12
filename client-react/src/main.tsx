import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Home } from 'react-feather';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { Footer } from './Components/Footer/Footer';
import { D4 } from './Components/Page_One/Games/D4/D4';
import { Fortnite } from './Components/Page_One/Games/Fortnite/Fortnite';
import { Valorant } from './Components/Page_One/Games/Valorant/Valorant';
import { Page_One } from './Components/Page_One/Page_one';
import './index.css';
import { Cs } from './Components/Page_One/Games/Cs/Cs';
import { Overwatch } from './Components/Page_One/Games/Overwatch/Overwatch';

// New Router

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/" element={<Page_One />} />
        <Route path="/Page_one/Fortnite/" element={<Fortnite />} />
        <Route path="/Page_one/Fortnite/:id" element={<Fortnite />} />
        <Route path="/Page_one/Valorant" element={<Valorant />} />
        <Route path="/Page_one/Valorant/:id" element={<Valorant />} />
        <Route path="/Page_one/D4" element={<D4 />} />
        <Route path="/Page_one/Cs" element={<Cs />} />
        <Route path="/Page_one/Overwatch" element={<Overwatch />} />
        <Route path="*" />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  </React.StrictMode>
);
