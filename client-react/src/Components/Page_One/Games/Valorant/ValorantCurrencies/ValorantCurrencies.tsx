import axios from 'axios';
import { useEffect, useState } from 'react';
import './ValorantCurrencies.css';

export function ValorantCurrencies() {
  interface ICurrencies {
    status: string;
    data: [
      {
        uuid: string;
        displayName: string;
        displayNameSingular: string;
        displayIcon: string;
        largeIcon: string;
        assetPath: string;
      }
    ];
  }

  const [APICurrencies, setAPICurrencies] = useState<ICurrencies>();

  useEffect(() => {
    if (APICurrencies) {
      if (APICurrencies.data.length > 0) return;
    } else
      axios
        .get('https://valorant-api.com/v1/currencies')
        .then((res) => {
          setAPICurrencies(res.data);
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
  }, []);

  return (
    <div className="currenciesBox">
      {APICurrencies?.data.map((currencies) => {
        return (
          <div key={currencies.displayName}>
            <h2>{currencies.displayName}</h2>
            <img src={currencies.displayIcon} alt={currencies.displayName} />
            <p>{currencies.displayNameSingular}</p>
          </div>
        );
      })}
    </div>
  );
}
