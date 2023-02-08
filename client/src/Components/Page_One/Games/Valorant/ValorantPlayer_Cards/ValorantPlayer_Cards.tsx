import axios from 'axios';
import { useEffect, useState } from 'react';
import './ValorantPlayer_Cards.css';

export function ValorantPlayer_Cards() {
  interface ICards {
    status: string;
    data: [
      {
        assetPath: string;
        displayIcon: string;
        displayName: string;
        isHiddenIfNotOwned: boolean;
        largeArt: string;
        smallArt: string;
        titleText: null;
        uuid: string;
        wideArt: string;
      }
    ];
  }

  const [APICards, setAPICards] = useState<ICards>();

  // hämtar hem från API
  useEffect(() => {
    axios
      .get('https://valorant-api.com/v1/playercards')
      .then((res) => {
        setAPICards(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div id="cards">
      {APICards?.data.map((card) => {
        return (
          <div id="card" key={card.displayName}>
            <p>{card.displayName}</p>

            <img src={card.smallArt} alt={card.displayName} />
          </div>
        );
      })}
    </div>
  );
}
