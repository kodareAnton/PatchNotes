import axios from "axios";
import { useEffect, useState } from "react";
import './ValorantMaps.css';

export function ValorantMaps() {

  const [APIMap, setAPIMAp] = useState<map>()

  interface map {
    status: string;
    data: [
      {
        uuid: string;
        displayName: string;
        coordinates: string;
        displayIcon: string;
        listViewIcon: string;
        splash: string;
        assetPath: string;
        mapUrl: string;
        xMultiplier: string;
        yMultiplier: string;
        xScalarToAdd: string;
        yScalarToAdd: string;
        callouts: [
          {
            regionName: string;
            superRegionName: string;
            location: {
              x: string;
              y: string;
            };
          }
        ];
      }
    ];
  }

  useEffect(() => {
    axios.get('https://valorant-api.com/v1/maps')
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
      <h1>Maps</h1>

      {APIMap?.data.map((item) =>{
        return<>
        <h1>{item.displayName}</h1>
        <img className="map" src={item.splash} alt={item.displayName} />
        
        </>
      })}
    </>
  );
}
