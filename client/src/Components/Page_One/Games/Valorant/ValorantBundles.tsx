import axios from 'axios';
import { useEffect, useState } from 'react';

export function ValorantBundles() {
  interface IBundles {
    status: string;
    data: [
      {
        uuid: string;
        displayName: string;
        displayNameSubText: string;
        description: string;
        extraDescription: string;
        promoDescription: string;
        useAdditionalContext: boolean;
        displayIcon: string;
        displayIcon2: string;
        verticalPromoImage: string;
        assetPath: string;
      }
    ];
  }

  const [APIBundles, setAPIBundles] = useState<IBundles>();

  useEffect(() => {
    axios
      .get('https://valorant-api.com/v1/bundles')
      .then((res) => {
        setAPIBundles(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div
        className="agents"
        style={{
          background: `black`,
        }}
      >
        {APIBundles?.data.map((bundle) => {
          return (
            <div key={bundle.displayName}>
              <p>{bundle.displayName}</p>´
              <img src={bundle.displayIcon} alt={bundle.displayName} />
            </div>
          );
        })}
      </div>
    </>
  );
}
