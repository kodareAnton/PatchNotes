import axios from 'axios';
import { useEffect, useState } from 'react';

export function AESFortnite() {
  interface IAES {
    status: string;
    data: {
      length: number;
      build: string;
      mainKey: string;
      dynamicKeys: [
        {
          pakFilename: string;
          pakGuid: string;
          key: string;
        }
      ];
      updated: string;
    };
  }

  const [APIAES, setAPIAES] = useState<IAES>();

  useEffect(() => {
    if (APIAES) {
      if (APIAES.data.length > 0) return;
    } else
      axios
        .get('https://fortnite-api.com/v2/aes')
        .then((res) => {
          setAPIAES(res.data);
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
  }, []);

  return <></>;
}
