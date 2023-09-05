import axios from 'axios';
import { useEffect, useState } from 'react';
import './ValorantSprays.css';

export function ValorantSprays() {
  interface ISpray {
    status: string;
    data: [
      {
        uuid: string;
        displayName: string;
        category: string;
        themeUuid: string;
        displayIcon: string;
        fullIcon: string;
        fullTransparentIcon: string;
        animationPng: string;
        animationGif: string;
        assetPath: string;
        levels: [
          {
            uuid: string;
            sprayLevel: number;
            displayName: string;
            displayIcon: string;
            assetPath: string;
          }
        ];
      }
    ];
  }

  const [APISpray, setAPISpray] = useState<ISpray>();

  useEffect(() => {
    if (APISpray) {
      if (APISpray.data.length > 0) return;
    } else
      axios
        .get('https://valorant-api.com/v1/sprays')
        .then((res) => {
          setAPISpray(res.data);
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
  }, []);
  return (
    <div id="sprayBox">
      {APISpray?.data.map((sprays) => {
        return (
          <div className="sprayIcon" key={sprays.displayName}>
            {' '}
            <p>{sprays.displayName}</p>
            <img
              className="sprayImg"
              src={sprays.displayIcon}
              alt={sprays.displayName}
            />
          </div>
        );
      })}
    </div>
  );
}
