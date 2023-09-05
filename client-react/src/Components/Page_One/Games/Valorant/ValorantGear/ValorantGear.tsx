import axios from 'axios';
import { useEffect, useState } from 'react';
import './ValorantGear.css';

export function ValorantGear() {
  interface IGear {
    status: string;
    data: [
      {
        uuid: string;
        displayName: string;
        description: string;
        displayIcon: string;
        assetPath: string;
        shopData: {
          cost: string;
          category: string;
          categoryText: string;

          gridPosition: {
            row: number;
            column: number;
          };
          canBeTrashed: boolean;
          image: string;
          newImage: string;
          newImage2: string;
          assetPath: string;
        };
      }
    ];
  }

  const [APIGear, setAPIGear] = useState<IGear>();

  useEffect(() => {
    // så att sidan inte laddas om varända gång användare gör något
    if (APIGear) {
      if (APIGear.data.length > 0) return;
    } else
      axios
        .get('https://valorant-api.com/v1/gear')
        .then((res) => {
          setAPIGear(res.data);
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
  }, []);

  return (
    <div className="gearBox">
      {APIGear?.data.map((gear) => {
        return (
          <div className="gear" key={gear.displayName}>
            <h2>{gear.displayName}</h2>
            <img id="gearIcon" src={gear.displayIcon} alt={gear.displayName} />
            <p>{gear.description}</p>
            <p>Cost: {gear.shopData.cost}</p>
          </div>
        );
      })}
    </div>
  );
}
