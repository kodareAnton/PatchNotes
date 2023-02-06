import axios from 'axios';
import { useEffect, useState } from 'react';
import './ValorantCermonies.css';
export function ValorantCermonies() {
  interface ICermonies {
    status: string;
    data: [
      {
        uuid: string;
        displayName: string;
        assetPath: string;
      }
    ];
  }

  const [APICermonies, setAPICermonies] = useState<ICermonies>();

  useEffect(() => {
    axios
      .get('https://valorant-api.com/v1/ceremonies')
      .then((res) => {
        setAPICermonies(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>ValorantCermonies</h1>

      {APICermonies?.data.map((cermonie) => {
        return (
          <>
            <h2>{cermonie.displayName}</h2>
          </>
        );
      })}
    </>
  );
}
