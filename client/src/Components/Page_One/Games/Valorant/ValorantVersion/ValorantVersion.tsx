import axios from 'axios';
import { useEffect, useState } from 'react';
import './ValorantVersion.css';

export function ValorantVersion() {
  interface IVersion {
    status: string;
    data: {
      length: number;
      manifestId: string;
      branch: string;
      version: string;
      buildVersion: string;
      engineVersion: string;
      riotClientVersion: string;
      riotClientBuild: string;
      buildDate: string;
    };
  }

  const [APIVersion, setAPIVersion] = useState<IVersion>();

  useEffect(() => {
    if (APIVersion) {
      if (APIVersion.data.length > 0) return;
    } else
      axios
        .get('https://valorant-api.com/v1/version')
        .then((res) => {
          setAPIVersion(res.data);
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
  }, []);

  return (
    <div id="version" key={APIVersion?.data.manifestId}>
      <h1>{APIVersion?.data.version}</h1>
      <p>{APIVersion?.data.buildVersion}</p>
      <p>{APIVersion?.data.branch}</p>
      <p>{APIVersion?.data.buildDate}</p>
      <p>{APIVersion?.data.engineVersion}</p>
    </div>
  );
}
