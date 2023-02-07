import axios from 'axios';
import { useEffect, useState } from 'react';
// import './Fortnite.css';

export function FortniteMap() {
  const [Map, setMap] = useState<Map>();
  console.log(Map);

  interface Map {
    data: {
      images: {
        blank: string;
        pois: string;
      };
      pois: {
        id: string;
        location: {
          x: number;
          y: number;
          z: number;
        };
        name: string;
      };
    };
    status: string;
  }

  useEffect(() => {
    axios
      .get<Map>('https://fortnite-api.com/v1/map')
      .then((res) => {
        setMap(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div id="FotniteMap">
      <img
        className="map"
        src={Map?.data.images.blank}
        alt={Map?.data.images.blank}
      />
    </div>
  );
}
