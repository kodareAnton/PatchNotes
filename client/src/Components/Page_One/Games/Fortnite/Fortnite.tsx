import axios from 'axios';
import { useEffect, useState } from 'react';
import './Fortnite.css';
import { FortniteMap } from './FortniteMap';
import { FortniteNews } from './FotniteNews';

export function Fortnite() {
  const API = [
    { name: 'AES / Advanced Encryption Standard', about: '' },
    { name: 'Banners', about: 'banner art' },
    { name: 'Cosmeticts', about: '' },
    { name: 'Creator Code', about: '' },
    { name: 'Map', about: '' },
    { name: 'News', about: '' },
    { name: 'Playlists', about: '' },
    { name: 'Shop', about: '' },
    { name: 'Stats', about: '' },
  ];

  const randomColor = Math.floor(Math.random() * 251);
  const randomColor1 = Math.floor(Math.random() * 251);
  const randomColor2 = Math.floor(Math.random() * 251);
  console.log(randomColor, randomColor1, randomColor2);

  const APIList = API.map((list) => (
    <div key={list.name}>
      <p
        style={{
          color: `rgba(${randomColor},${randomColor1},${randomColor2})`,
          border: `1px solid rgba(${randomColor},${randomColor1},${randomColor2} `,
          backgroundColor: 'rgba(0, 0, 0, 0.658)',
          borderRadius: '10px',
        }}
      >
        {list.name}
      </p>
    </div>
  ));

  console.log(APIList);

  return (
    <>
      {/* <FortniteNews />
      <FortniteMap /> */}
      {APIList}
    </>
  );
}
