import axios from 'axios';
import { useEffect, useState } from 'react';

export function FortniteCreatorcode() {
  interface ICode {
    status: number;
    data: {
      code: string;
      account: {
        id: string;
        name: string;
      };
      status: string;
      verified: boolean;
    };
  }

  // skriv ut uppdateringar vi https://dash.fortnite-api.com/
  const [Code, setCode] = useState<ICode>();

  // hämtar från Fortnite Api
  useEffect(() => {
    axios
      .get('https://fortnite-api.com/v2/creatorcode')
      .then((res) => {
        setCode(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <div>{/* <h1>{Code?.data.account.name}</h1> */}</div>;
}
