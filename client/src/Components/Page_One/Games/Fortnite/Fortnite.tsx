import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './Fortnite.css';
import { FortniteBanners } from './FortniteBanners';
import { FortniteMap } from './FortniteMap';
import { FortniteShop } from './FortntiteShop';
import { FortniteNews } from './FotniteNews';

export function Fortnite() {
  interface IAPI {
    id: number;
    name: string;
    link: string;
    content?: any;
  }
  const API = [
    { id: 0, name: 'AES/Advanced Encryption Standard', link: 'AES' },
    { id: 1, name: 'Banners', link: 'Banners', content: <FortniteBanners /> },
    { id: 2, name: 'Cosmeticts', link: 'CosmetictsS' },
    { id: 3, name: 'CreatorCode', link: 'CreatorCode' },
    { id: 4, name: 'Map', link: 'FortniteMap', content: <FortniteMap /> },
    { id: 5, name: 'News', link: 'News', content: <FortniteNews /> },
    { id: 6, name: 'Playlists', link: 'Playlists' },
    { id: 7, name: 'Shop', link: 'Shop', content: <FortniteShop /> },
    { id: 8, name: 'Stats', link: 'Stats' },
  ];

  // Lastar in id i local storage så att jag man vet vilken sida som ska synas
  const handler = (e: any) => {
    console.log(e.currentTarget.dataset.index);
    localStorage.setItem('Fortnite', e.currentTarget.dataset.index);
    window.location.reload();
  };

  // skriver ut all undermenyer som tillhör spelet med en map function
  const APIList = API.map((list, index) => {
    const randomColor1 = Math.floor(Math.random() * 255);
    const randomColor2 = Math.floor(Math.random() * 255);

    // skriver ut Nav listan
    return (
      <div key={index} data-index={index} onClick={handler}>
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

  const Content = API.map((nav) => {
    const id = localStorage.getItem('Fortnite');
    const idNr = parseInt(id);
    if (idNr === nav.id) {
      return <div key={nav.id}>{nav.content}</div>;
    }

    console.log(idNr);
  });

  return (
    <>
      <h1 id="Fortnite">Fortnite</h1>
      <div id="randomDiv">{APIList}</div>
      {Content}
    </>
  );
}
