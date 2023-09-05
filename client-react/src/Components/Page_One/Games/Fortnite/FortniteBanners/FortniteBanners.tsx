import axios from 'axios';
import { useEffect, useState } from 'react';
import './FortniteBanners.css';

export function FortniteBanners() {
  interface IBanner {
    status: any;
    data: [
      {
        id: string;
        devName: string;
        name: string;
        description: string;
        category: string;
        fullUsageRights: boolean;
        images: {
          smallIcon: string;
          icon: string;
        };
      }
    ];
  }

  const [Banner, setMap] = useState<IBanner>();
  console.log(Banner);

  useEffect(() => {
    axios
      .get<IBanner>('https://fortnite-api.com/v1/banners')
      .then((res) => {
        setMap(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const allBanners = Banner?.data.map((Item) => {
    return (
      <>
        <img
          src={Item.images.smallIcon}
          alt={Item.name}
          className="ForniteIcons"
        />
      </>
    );
  });

  return <div className="FBanner">{allBanners}</div>;
}
