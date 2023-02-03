import axios from 'axios';
import { useEffect, useState } from 'react';

export function ValorantAgents() {
  interface IAgents {
    status: string;
    data: [
      {
        uuid: string;
        displayName: string;
        description: string;
        developerName: string;
        characterTags: string;
        displayIcon: string;
        displayIconSmall: string;
        bustPortrait: string;
        fullPortrait: string;
        fullPortraitV2: string;
        killfeedPortrait: string;
        background: string;
        backgroundGradientColors: string;
        assetPath: string;
        isFullPortraitRightFacing: boolean;
        isPlayableCharacter: boolean;
        isAvailableForTest: boolean;
        isBaseContent: boolean;
        role: {
          uuid: string;
          displayName: string;
          description: string;
          displayIcon: string;
          assetPath: string;
        };
        abilities: {
          slot: string;
          displayName: string;
          description: string;
          displayIcon: string;
        };
        voiceLine: {
          minDuration: number;
          maxDuration: number;
        };
        mediaList: [
          {
            id: number;
            wwise: string;
            wave: string;
          }
        ];
      }
    ];
  }

  const [APIAgents, setAPIAgents] = useState<IAgents>();

  useEffect(() => {
    axios
      .get('https://valorant-api.com/v1/agents')
      .then((res) => {
        setAPIAgents(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>Agents</h1>

      <div className="agents">
        {APIAgents?.data.map((agent) => {
          const randomColor1 = Math.floor(Math.random() * 255);
          const randomColor2 = Math.floor(Math.random() * 255);
          return (
            <div
              key={agent.displayName}
              style={{
                background: `rgba(255,${randomColor1},${randomColor2}, 0.1)`,
                border: `1px solid rgba(255,${randomColor1},${randomColor2} `,
              }}
            >
              <p>{agent.displayName}</p>
              <img src={agent.displayIcon} alt={agent.displayName} />
            </div>
          );
        })}
      </div>
    </>
  );
}
