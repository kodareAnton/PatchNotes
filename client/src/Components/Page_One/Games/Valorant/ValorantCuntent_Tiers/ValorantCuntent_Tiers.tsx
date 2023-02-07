import axios from "axios";
import { useEffect, useState } from "react";
import './ValorantCuntent_Tiers.css'

export function ValorantCuntent_Tiers() {
  interface ITiers {
    status: string;
    data: [
      {
        uuid: string;
        displayName: string;
        devName: string;
        rank: string;
        juiceValue: string;
        juiceCost: number;
        highlightColor: string;
        displayIcon: string;
        assetPath: string;
      }
    ];
  }

  const [APITiers, setAPITiers] = useState<ITiers>();

  useEffect(() => {
    if (APITiers) {
        if (APITiers.data.length > 0) return;
      } else
    axios
      .get('https://valorant-api.com/v1/contenttiers')
      .then((res) => {
        setAPITiers(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return <div className="tiers">
    {APITiers?.data.map((tiers) =>{
      return<div key={tiers.displayName}>
        <h2>{tiers.displayName}</h2>
        <img src={tiers.displayIcon} alt={tiers.rank} />
      
        <p>Cost: {tiers.juiceCost}€</p>
        
      </div>
    })}
  </div>;
}
