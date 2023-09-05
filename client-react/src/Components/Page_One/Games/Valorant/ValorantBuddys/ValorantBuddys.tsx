import axios from "axios";
import { useEffect, useState } from "react";
import './ValorantBuddys.css';

export function ValorantBuddys() {
  interface Ibuddy {
    status: string;
    data: [
      {
        uuid: string;
        displayName: string;
        isHiddenIfNotOwned: boolean;
        themeUuid: string;
        displayIcon: string;
        assetPath: string;
        levels: [
          {
            uuid: string;
            charmLevel: string;
            displayName: string;
            displayIcon: string;
            assetPath: string;
          }
        ];
      }
    ];
  }

  const [APIMap, setAPIMAp] = useState<Ibuddy>();

  useEffect(() => {
    axios
      .get("https://valorant-api.com/v1/buddies")
      .then((res) => {
        setAPIMAp(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>Buddys</h1>
      <div id="buddybox">
      {APIMap?.data.map((item) =>{
        return<div className="buddy" key={item.displayName}>
            <p>{item.displayName}</p>
        <img className="buddys" src={item.displayIcon} alt={item.displayName} />
        </div>
      })}
      </div>
    </>
  );
}
