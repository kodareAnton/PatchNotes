import axios from 'axios';
import { useEffect, useState } from 'react';
import './ValorantCompetitive_Tiers.css';

export function ValorantCompetitive_Tiers() {
  interface ICompetitive_Tiers {
    status: string;
    data: [
      {
        uuid: string;
        assetObjectName: string;
        tiers: [
          {
            tier: string;
            tierName: string;
            division: string;
            divisionName: string;
            color: string;
            backgroundColor: string;
            smallIcon: string;
            largeIcon: string;
            rankTriangleDownIcon: string;
            rankTriangleUpIcon: string;
          }
        ];
        assetPath: string;
      }
    ];
  }

  const [APICompetitive_Tiers, setAPICompetitive_Tiers] =
    useState<ICompetitive_Tiers>();

  useEffect(() => {
    if (APICompetitive_Tiers) {
      if (APICompetitive_Tiers.data.length > 0) return;
    } else
      axios
        .get('https://valorant-api.com/v1/competitivetiers')
        .then((res) => {
          setAPICompetitive_Tiers(res.data);
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
  }, []);

  return (
    <div className="tiersBox">
      {APICompetitive_Tiers?.data.map((tiers) => {

        const season = tiers.assetObjectName
        const seasons = season.slice(0, 8)

        return (
          <>
          <h2 className='seasons'>{seasons}</h2>
            <div className='tiers' key={tiers.assetObjectName}>
              {tiers.tiers.map((tier) => {


                if(tier.smallIcon === null){return
                }else
                return (
                  <div className='tier'>
                    <p>{tier.tierName}</p>
                    <img
                      className="tierImg"
                      src={tier.smallIcon}
                      alt={tier.tierName}
                    />
                  </div>
                );
              })}
            </div>
          </>
        );
      })}
    </div>
  );
}
