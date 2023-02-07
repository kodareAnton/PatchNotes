import axios from "axios";
import { useEffect, useState } from "react";
import './ValorantSeasons.css'

export function ValorantSeasons() {
  interface ISeasons {
    status: String;
    data: [
      {
        uuid: string;
        displayName: string;
        type: string;
        startTime: string;
        endTime: string;
        parentUuid: string;
        assetPath: string;
      }
    ];
  }

  const [APISeasons, setAPISeasons] =
    useState<ISeasons>();

  useEffect(() => {
    if (APISeasons) {
      if (APISeasons.data.length > 0) return;
    } else
      axios
        .get('https://valorant-api.com/v1/seasons')
        .then((res) => {
          setAPISeasons(res.data);
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
  }, []);



  return <div id="seasons">
    {APISeasons?.data.map((season) =>{

      const start = season.startTime
      const end = season.endTime

      const starttime = start.slice(0,10)
      const endtime = end.slice(0,10)

      const randomColor1 = Math.floor(Math.random() * 255);
          const randomColor2 = Math.floor(Math.random() * 255);

        return<div  style={{
          background: `rgba(255,${randomColor1},${randomColor2}, 0.1)`,
          border: `1px solid rgba(255,${randomColor1},${randomColor2} `,
        }} key={season.displayName}><h2>{season.displayName}</h2>
        <p>Start: {starttime}</p>
        <p>End: {endtime}</p>
        </div>
    })}
  </div>;
}
