import axios from 'axios';
import { useEffect, useState } from 'react';
import './FortniteCosmetics.css';

export function FortniteCosmetics() {
  interface ICosmetics {
    status: number;
    data: [
      {
        id: string;
        name: string;
        description: string;
        type: {
          value: string;
          displayValue: string;
          backendValue: string;
        };
        rarity: {
          value: string;
          displayValue: string;
          backendValue: string;
        };
        series: {
          value: string;
          image: string;
          colors: string[];
          backendValue: string;
        };
        set: {
          value: string;
          text: string;
          backendValue: string;
        };
        introduction: {
          chapter: string;
          season: string;
          text: string;
          backendValue: string;
        };
        images: {
          smallIcon: string;
          icon: string;
          featured: string;
          Other: string;
        };
        variants: [
          {
            channel: string;
            type: string;
            options: [
              {
                tag: string;
                name: string;
                image: string;
              }
            ];
            searchTags: string[];
          }
        ];
        gameplayTags: string[];
        metaTags: string[];
        showcaseVideo: string;
        dynamicPakId: string;
        displayAssetPath: string;
        definitionPath: string;
        path: string;
        added: string;
        shopHistory: string[];
      }
    ];
  }

  const [APICosmetics, setAPICosmetics] = useState<ICosmetics>();

  useEffect(() => {
    if (APICosmetics) {
      if (APICosmetics.data.length > 0) return;
    } else
      axios
        .get('https://fortnite-api.com/v2/cosmetics/br')
        .then((res) => {
          setAPICosmetics(res.data);
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
  }, []);

  return (
    <div className="cosmeticsBox">
      {APICosmetics?.data.map((cosmetic) => {
        return (
          <div className="cosmetic" key={cosmetic.id}>
            <p>{cosmetic.name}</p>
            <img
              className="cosmeticImg"
              src={cosmetic.images.smallIcon}
              alt={cosmetic.id}
            />
          </div>
        );
      })}
    </div>
  );
}
