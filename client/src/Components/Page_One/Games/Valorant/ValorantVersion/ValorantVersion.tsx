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

  const data = APIVersion?.data.buildDate;
  const date = data?.slice(0, 10);

  return (
    <div id="version" key={APIVersion?.data.manifestId}>
      <h2>Verson: {APIVersion?.data.version}</h2>
      <p>Buildversion: {APIVersion?.data.buildVersion}</p>
      <p>Date: {date}</p>
      <p>Engine Verson: {APIVersion?.data.engineVersion}</p>
    </div>
  );
}
