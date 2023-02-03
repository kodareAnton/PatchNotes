import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home, Layout } from 'react-feather';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import { Footer } from './Components/Footer/Footer';
import { Login } from './Components/Login/Login';
import { Fortnite } from './Components/Page_One/Games/Fortnite/Fortnite';
import { Valorant } from './Components/Page_One/Games/Valorant/Valorant';
import { ValorantMaps } from './Components/Page_One/Games/Valorant/ValorantMaps';
import { Page_One } from './Components/Page_One/Page_one';
import { Page_two } from './Components/Page_Two/Page_Two';
import './index.css';

// New Router

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
      {/* <Route path="/" element={<Layout />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Page_one" element={<Page_One />} />
        <Route path="/Page_Two" element={<Page_two />} />
        <Route path="/Page_one/Fortnite/" element={<Fortnite />} />
        <Route path="/Login" element={<Login />} /> */}
        <Route path="/Page_one/Valorant" element={<Valorant />} />
        <Route
          path="/Page_one/Valorant/:id"
          element={<ValorantMaps />}
        />
         <Route path="*" />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
