import { useParams } from 'react-router-dom';
import { ValorantGamemodes } from './Gamemodes/ValorantGamemodes';
import { ValorantAgents } from './ValorantAgents/ValorantAgents';
import { ValorantBuddys } from './ValorantBuddys/ValorantBuddys';
import { ValorantBundles } from './ValorantBundles/ValorantBundles';
import { ValorantCermonies } from './ValorantCermonies/ValorantCermonies';
import { ValorantCompetitive_Tiers } from './ValorantCompetitive_Tiers/ValorantCompetitive_Tiers';
import { ValorantContracts } from './ValorantContracts/ValorantContracts';
import { ValorantCuntent_Tiers } from './ValorantCuntent_Tiers/ValorantCuntent_Tiers';
import { ValorantCurrencies } from './ValorantCurrencies/ValorantCurrencies';
import { ValorantEvents } from './ValorantEvents/ValorantEvents';
import { ValorantGear } from './ValorantGear/ValorantGear';
import { ValorantLevel_Borders } from './ValorantLevel_Borders/ValorantLevel_Borders';
import { ValorantMaps } from './ValorantMaps/ValorantMaps';
import { ValorantPlayers_Titles } from './ValorantPlayers_Titles/ValorantPlayers_Titles';
import { ValorantPlayer_Cards } from './ValorantPlayer_Cards/ValorantPlayer_Cards';
import { ValorantSeasons } from './ValorantSeasons/ValorantSeasons';
import { ValorantSprays } from './ValorantSprays/ValorantSprays';
import { ValorantThemes } from './ValorantThemes/ValorantThemes';
import { ValorantVersion } from './ValorantVersion/ValorantVersion';
import { ValorantWeapons } from './ValorantWeapons/ValorantWeapons';

export function CheckComponent() {
  let { id } = useParams();

  const API = [
    { link: 'ValorantAgents', conponent: <ValorantAgents /> },
    { link: 'ValorantBuddys', conponent: <ValorantBuddys /> },
    {
      link: 'ValorantBundles',
      conponent: <ValorantBundles />,
    },
    {
      id: 3,
      name: 'Cermonies',
      link: 'ValorantCermonies',
      conponent: <ValorantCermonies />,
    },
    {
      id: 4,
      name: 'Competitive_Tiers',
      link: 'ValorantCompetitive_Tiers',
      conponent: <ValorantCompetitive_Tiers />,
    },
    {
      id: 5,
      name: 'Cuntent_Tiers',
      link: 'ValorantCuntent_Tiers',
      conponent: <ValorantCuntent_Tiers />,
    },
    {
      id: 6,
      name: 'Contracts',
      link: 'ValorantContracts',
      conponent: <ValorantContracts />,
    },
    {
      id: 7,
      name: 'Currencies',
      link: 'ValorantCurrencies',
      conponent: <ValorantCurrencies />,
    },
    {
      id: 8,
      name: 'Events',
      link: 'ValorantEvents',
      conponent: <ValorantEvents />,
    },
    {
      id: 9,
      name: 'Gamemodes',
      link: 'ValorantGamemodes',
      conponent: <ValorantGamemodes />,
    },
    { id: 10, name: 'Gear', link: 'ValorantGear', conponent: <ValorantGear /> },
    {
      id: 11,
      name: 'Level_Borders',
      link: 'ValorantLevel_Borders',
      conponent: <ValorantLevel_Borders />,
    },
    { id: 12, name: 'Maps', link: 'ValorantMaps', conponent: <ValorantMaps /> },
    {
      id: 13,
      name: 'Player_Cards',
      link: 'ValorantPlayer_Cards',
      conponent: <ValorantPlayer_Cards />,
    },
    {
      id: 14,
      name: 'Players_Titles',
      link: 'ValorantPlayers_Titles',
      conponent: <ValorantPlayers_Titles />,
    },
    {
      id: 15,
      name: 'Seasons',
      link: 'ValorantSeasons',
      conponent: <ValorantSeasons />,
    },
    {
      id: 16,
      name: 'Sprays',
      link: 'ValorantSprays',
      conponent: <ValorantSprays />,
    },
    {
      id: 17,
      name: 'Themes',
      link: 'ValorantThemes',
      conponent: <ValorantThemes />,
    },
    {
      id: 18,
      name: 'Weapons',
      link: 'ValorantWeapons',
      conponent: <ValorantWeapons />,
    },
    {
      id: 19,
      name: 'Version',
      link: 'ValorantVersion',
      conponent: <ValorantVersion />,
    },
  ];

  return (
    <>
      {API.map((valo) => {
        if (id === valo.link) {
          return <>{valo.conponent}</>;
        } else {
          return <></>;
        }
      })}
    </>
  );
}
