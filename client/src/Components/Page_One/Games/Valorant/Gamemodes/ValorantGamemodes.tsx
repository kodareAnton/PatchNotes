import axios from 'axios';
import { useEffect, useState } from 'react';

export function ValorantGamemodes() {
  interface IGamemodes {
    status: string;
    data: [
      {
        uuid: string;
        displayName: string;
        duration: string;
        allowsMatchTimeouts: boolean;
        isTeamVoiceAllowed: boolean;
        isMinimapHidden: boolean;
        orbCount: number;
        roundsPerHalf: number;
        teamRoles: string;
        gameFeatureOverrides: [
          {
            featureName: string;
            state: boolean;
          }
        ];
        gameRuleBoolOverrides: [
          {
            ruleName: string;
            state: boolean;
          }
        ];
        displayIcon: string;
        assetPath: string;
      }
    ];
  }

  const [APIGamemode, setAPIGamemode] = useState<IGamemodes>();

  useEffect(() => {
    axios
      .get('https://valorant-api.com/v1/gamemodes')
      .then((res) => {
        setAPIGamemode(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <h1>Gamemodes</h1>
      <div className="agents">
        {APIGamemode?.data.map((gamemode) => {
          return (
            <>
              <div>
                <p>{gamemode.displayName}</p>
                <img src={gamemode.displayIcon} alt={gamemode.displayName} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
