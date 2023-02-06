import axios from 'axios';
import { useEffect, useState } from 'react';
import './ValorantPlayers_Titles.css';

export function ValorantPlayers_Titles() {
  interface ITitles {
    data: [
      {
        assetPath: string;
        displayName: string;
        isHiddenIfNotOwned: boolean;
        titleText: null;
        uuid: string;
      }
    ];
    status: string;
  }

  const [APIPlayers_Titles, setAPIPlayers_Titles] = useState<ITitles>();

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
      {/* {APIPlayers_Titles.data.map((title) => {
        return <div key={}></div>;
      })} */}
    </>
  );
}
