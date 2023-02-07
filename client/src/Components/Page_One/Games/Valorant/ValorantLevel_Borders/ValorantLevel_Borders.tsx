import axios from "axios";
import { useEffect, useState } from "react";
import './ValorantLevel_Borders.css'

export function ValorantLevel_Borders() {
  interface IBorder {
    status: string;
    data: [
      {
        uuid: string;
        startingLevel: string;
        levelNumberAppearance: string;
        smallPlayerCardAppearance: string;
        assetPath: string;
      }
    ];
  }

  const [APIBorder, setAPIBorder] = useState<IBorder>();

  useEffect(() => {
    // så att sidan inte laddas om varända gång användare gör något
    if (APIBorder) {
      if (APIBorder.data.length > 0) return;
    } else
      axios
        .get('https://valorant-api.com/v1/levelborders')
        .then((res) => {
          setAPIBorder(res.data);
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
  }, []);

  return <div id="lvlBox">
    {APIBorder?.data.map((border) =>{
        return<div id="lvlBorder" key={border.startingLevel}><h2>Level {border.startingLevel}</h2>
        <img src={border.smallPlayerCardAppearance} alt={border.startingLevel}></img></div>
    })}
  </div>;
}
