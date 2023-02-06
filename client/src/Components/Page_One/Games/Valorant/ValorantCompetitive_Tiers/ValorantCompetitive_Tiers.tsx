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
    <div className="tiers">
      {APICompetitive_Tiers?.data.map((tiers) => {
        return (
          <>
            <div>
              {tiers.tiers.map((tier) => {
                return (
                  <>
                    <p>{tier.tierName}</p>
                    <img className="tier" src={tier.smallIcon} alt="" />
                  </>
                );
              })}
            </div>
          </>
        );
      })}
    </div>
  );
}
