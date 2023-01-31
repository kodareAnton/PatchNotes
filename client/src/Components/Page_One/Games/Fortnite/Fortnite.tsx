import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './Fortnite.css';
import { FortniteMap } from './FortniteMap';
import { FortniteNews } from './FotniteNews';

export function Fortnite() {
  interface IAPI {
    id: number;
    name: string;
    link: string;
    content?: any;
  }
  const API = [
    { id: 1, name: 'AES/Advanced Encryption Standard', link: 'AES' },
    { id: 2, name: 'Banners', link: 'Banners' },
    { id: 3, name: 'Cosmeticts', link: 'CosmetictsS' },
    { id: 4, name: 'CreatorCode', link: 'CreatorCode' },
    { id: 5, name: 'Map', link: 'FortniteMap', content: <FortniteMap /> },
    { id: 6, name: 'News', link: 'News', content: <FortniteNews /> },
    { id: 7, name: 'Playlists', link: 'Playlists' },
    { id: 8, name: 'Shop', link: 'Shop' },
    { id: 9, name: 'Stats', link: 'Stats' },
  ];

  const APIList = API.map((list, index) => {
    const randomColor1 = Math.floor(Math.random() * 255);
    const randomColor2 = Math.floor(Math.random() * 255);

    // skriver ut Nav listan
    return (
      <div key={index}>
        <p
          id="random"
          style={{
            color: `rgba(255,${randomColor1},${randomColor2})`,
            border: `1px solid rgba(255,${randomColor1},${randomColor2} `,
          }}
        >
          {list.name}
        </p>
      </div>
    );
  });

  const [c, setC] = useState([]);

  const Content = API.map((nav) => {
    return;
  });

  return (
    <>
      <h1>Fortnite</h1>
      <div id="randomDiv">{APIList}</div>
      {/* {Content} */}
    </>
  );
}
