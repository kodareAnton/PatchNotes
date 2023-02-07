import axios from "axios";
import { useEffect, useState } from "react";

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
  return <></>;
}
