import axios from 'axios';
import { useEffect, useState } from 'react';
import './ValorantGamemodes.css';

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
      <div className="Gamemodes">
        {APIGamemode?.data.map((gamemode) => {

          if(gamemode.duration === null){
            return;
          }else
          return (
            <>
              <div id='gamemode' key={gamemode.displayName}>
                <h2>{gamemode.displayName}</h2>
                <img
                  className="gamemode_icon"
                  src={gamemode.displayIcon}
                  alt={gamemode.displayName}
                />
                <p>Time: {gamemode.duration}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
