import axios from 'axios';
import { useEffect, useState } from 'react';

export function FortnitePlaylists() {
  interface IPlaylists {
    status: string;
    data: [
      {
        id: string;
        name: string;
        subName: string;
        description: string;
        gameType: string;
        ratingType: string;
        minPlayers: number;
        maxPlayers: number;
        maxTeams: number;
        maxTeamSize: number;
        maxSquads: number;
        maxSquadSize: number;
        isDefault: boolean;
        isTournament: boolean;
        isLimitedTimeMode: boolean;
        isLargeTeamGame: boolean;
        accumulateToProfileStats: boolean;
        images: {
          showcase: string;
          missionIcon: string;
        };
        gameplayTags: string[];
        path: string;
        added: string;
      }
    ];
  }

  const [APIPlaylists, setAPIPlaylists] = useState<IPlaylists>();

  useEffect(() => {
    if (APIPlaylists) {
      if (APIPlaylists.data.length > 0) return;
    } else
      axios
        .get('https://fortnite-api.com/v1/playlists')
        .then((res) => {
          setAPIPlaylists(res.data);
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
  }, []);
  return (
    <div>
      {APIPlaylists?.data.map((playlist) => {
        return (
          <div key={playlist.id}>
            <p>{playlist.name}</p>
          </div>
        );
      })}
    </div>
  );
}
