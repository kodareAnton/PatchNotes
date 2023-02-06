import axios from 'axios';
import { useEffect, useState } from 'react';
import './ValorantPlayers_Titles.css';

export function ValorantPlayers_Titles() {
  interface ITitles {
    status: string;
    data: [
      {
        assetPath: string;
        displayName: string;
        isHiddenIfNotOwned: boolean;
        titleText: null;
        uuid: string;
      }
    ];
  }

  const [APITitles, setAPIPlayers_Titles] = useState<ITitles>();

  useEffect(() => {
    axios
      .get('https://valorant-api.com/v1/playertitles')
      .then((res) => {
        setAPIPlayers_Titles(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {/* {APITitles.data.map((title) => {
        return (
          <div className="text" key={title.displayName}>
            <p>{title.titleText}</p>
          </div>
        );
      })} */}
    </>
  );
}
