import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import { Fortnite } from './Components/Page_One/Games/Fortnite/Fortnite';
import { Valorant } from './Components/Page_One/Games/Valorant/Valorant';
import { ValorantShop } from './Components/Page_One/Games/Valorant/ValorantShop';
import './index.css';

// New Router

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/Page_one/Valorant" element={<Valorant />} />
        <Route
          path="/Page_one/Valorant/ValorantShop"
          element={<ValorantShop />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
