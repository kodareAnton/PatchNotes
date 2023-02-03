import { useParams } from 'react-router-dom';
import { ValorantGamemodes } from './Gamemodes/ValorantGamemodes';
import { ValorantAgents } from './ValorantAgents';
import { ValorantBuddys } from './ValorantBuddys';
import { ValorantBundles } from './ValorantBundles';
import { ValorantMaps } from './ValorantMaps';

export function CheckComponent() {
  let { id } = useParams();

  const API = [
    { link: 'ValorantAgents', conponent: <ValorantAgents /> },
    { link: 'ValorantBuddys', conponent: <ValorantBuddys /> },
    {
      link: 'ValorantBundles',
      conponent: <ValorantBundles />,
    },
    { id: 3, name: 'Cermonies', link: 'ValorantCermonies' },
    { id: 4, name: 'Competitive_Tiers', link: 'ValorantCompetitive_Tiers' },
    { id: 5, name: 'Cuntent_Tiers', link: 'ValorantCuntent_Tiers' },
    { id: 6, name: 'Contracts', link: 'ValorantContracts' },
    { id: 7, name: 'Currencies', link: 'ValorantCurrencies' },
    { id: 8, name: 'Events', link: 'ValorantEvents' },
    {
      id: 9,
      name: 'Gamemodes',
      link: 'ValorantGamemodes',
      conponent: <ValorantGamemodes />,
    },
    { id: 10, name: 'Gear', link: 'ValorantGear' },
    { id: 11, name: 'Level_Borders', link: 'ValorantLevel_Borders' },
    { id: 12, name: 'Maps', link: 'ValorantMaps', conponent: <ValorantMaps /> },
    { id: 13, name: 'Player_Cards', link: 'ValorantPlayer_Cards' },
    { id: 14, name: 'Players_Titles', link: 'ValorantPlayers_Titles' },
    { id: 15, name: 'Seasons', link: 'ValorantSeasons' },
    { id: 16, name: 'Sprays', link: 'ValorantSprays' },
    { id: 17, name: 'Themes', link: 'ValorantThemes' },
    { id: 18, name: 'Weapons', link: 'ValorantWeapons' },
    { id: 19, name: 'Version', link: 'ValorantVersion' },
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
