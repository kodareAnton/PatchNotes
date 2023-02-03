import { Link } from 'react-router-dom';
import { ValorantMaps } from './ValorantMaps';
import './Valorant.css';
import { CheckComponent } from './CheckComponent';

export function Valorant() {
  const API = [
    { id: 0, name: 'Agents', link: 'ValorantAgents' },
    { id: 1, name: 'Bubbys', link: 'ValorantBuddys' },
    {
      id: 2,
      name: 'Bundles',
      link: 'ValorantBundles',
    },
    { id: 3, name: 'Cermonies', link: 'ValorantCermonies' },
    { id: 4, name: 'Competitive_Tiers', link: 'ValorantCompetitive_Tiers' },
    { id: 5, name: 'Cuntent_Tiers', link: 'ValorantCuntent_Tiers' },
    { id: 6, name: 'Contracts', link: 'ValorantContracts' },
    { id: 7, name: 'Currencies', link: 'ValorantCurrencies' },
    { id: 8, name: 'Events', link: 'ValorantEvents' },
    { id: 9, name: 'Gamemodes', link: 'ValorantGamemodes' },
    { id: 10, name: 'Gear', link: 'ValorantGear' },
    { id: 11, name: 'Level_Borders', link: 'ValorantLevel_Borders' },
    { id: 12, name: 'Maps', link: 'ValorantMaps' },
    { id: 13, name: 'Player_Cards', link: 'ValorantPlayer_Cards' },
    { id: 14, name: 'Players_Titles', link: 'ValorantPlayers_Titles' },
    { id: 15, name: 'Seasons', link: 'ValorantSeasons' },
    { id: 16, name: 'Sprays', link: 'ValorantSprays' },
    { id: 17, name: 'Themes', link: 'ValorantThemes' },
    { id: 18, name: 'Weapons', link: 'ValorantWeapons' },
    { id: 19, name: 'Version', link: 'ValorantVersion' },
  ];

  // skriver ut all undermenyer som tillhör spelet med en map function
  const APIList = API.map((list, index) => {
    const randomColor1 = Math.floor(Math.random() * 255);
    const randomColor2 = Math.floor(Math.random() * 255);

    // skriver ut Nav listan
    return (
      <div key={index} data-index={index}>
        <li
          id="random"
          style={{
            color: `rgba(255,${randomColor1},${randomColor2})`,
            border: `1px solid rgba(255,${randomColor1},${randomColor2} `,
          }}
        >
          <Link
            style={{
              color: `rgba(255,${randomColor1},${randomColor2})`,
            }}
            to={`/Page_one/Valorant/${list.link}`}
          >
            {list.name}
          </Link>
        </li>
      </div>
    );
  });
  return (
    <>
      <h1>Valorant</h1>
      <ul>{APIList}</ul>

      <CheckComponent />
    </>
  );
}
