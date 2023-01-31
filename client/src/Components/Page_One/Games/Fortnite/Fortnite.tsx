import axios from 'axios';
import { useEffect, useState } from 'react';
import './Fortnite.css';
import { FortniteMap } from './FortniteMap';
import { FortniteNews } from './FotniteNews';

export function Fortnite() {
  const API = [
    { name: 'AES / Advanced Encryption Standard', isClicked: false },
    { name: 'Banners', isClicked: false },
    { name: 'Cosmeticts', isClicked: false },
    { name: 'Creator Code', isClicked: false },
    { name: 'Map', place: <FortniteNews />, isClicked: false },
    { name: 'News', place: <FortniteMap />, isClicked: false },
    { name: 'Playlists', isClicked: false },
    { name: 'Shop', isClicked: false },
    { name: 'Stats', isClicked: false },
  ];

  const randomColor1 = Math.floor(Math.random() * 251);
  const randomColor2 = Math.floor(Math.random() * 251);

  function IsClicked() {
    console.log();
  }

  const APIList = API.map((list) => (
    <div key={list.name} onClick={IsClicked}>
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
  ));

  return (
    <>
      <div id="randomDiv">{APIList}</div>
      {/* <FortniteNews />
      <FortniteMap /> */}
    </>
  );
}
