import axios from 'axios';
import { useEffect, useState } from 'react';
import './ValorantContracts.css';

export function ValorantContracts() {
  interface IContracts {
    status: string;
    data: [
      {
        uuid: string;
        displayName: string;
        displayIcon: string;
        shipIt: boolean;
        freeRewardScheduleUuid: string;
        content: {
          relationType: string;
          relationUuid: string;
          chapters: [
            {
              isEpilogue: boolean;
              levels: [
                {
                  reward: {
                    type: string;
                    uuid: string;
                    amount: number;
                    isHighlighted: boolean;
                  };
                  xp: number;
                  vpCost: number;
                  isPurchasableWithVP: boolean;
                }
              ];
              freeRewards: [
                {
                  type: string;
                  uuid: string;
                  amount: string;
                  isHighlighted: boolean;
                }
              ];
            }
          ];
          premiumRewardScheduleUuid: string;
          premiumVPCost: number;
        };
        assetPath: string;
      }
    ];
  }

  const [APIContracts, setAPIContracts] = useState<IContracts>();

  useEffect(() => {
    if (APIContracts) {
      if (APIContracts.data.length > 0) return;
    } else
      axios
        .get('https://valorant-api.com/v1/contracts')
        .then((res) => {
          setAPIContracts(res.data);
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
  }, []);
  return (
    <div className="contracts">
      {APIContracts?.data.map((contract) => {
        if (contract.displayIcon === null) {
          return;
        } else
          return (
            <div key={contract.displayName} className="contract">
              <p>{contract.displayName}</p>
              <img
                className="contractImg"
                src={contract.displayIcon}
                alt={contract.displayName}
              />
            </div>
          );
      })}
    </div>
  );
}
