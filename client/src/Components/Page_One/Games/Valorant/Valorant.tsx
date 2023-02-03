import { Link } from 'react-router-dom';
import { ValorantMaps } from './ValorantMaps';

export function Valorant() {
  const API = [
    { id: 0, name: 'Agents', link: 'ValornatAgents' },
    { id: 1, name: 'Bubbys', link: 'ValorantBuddys'},
    {
      id: 2,
      name: 'Bundles', link: 'ValorantBundles',
    },
    { id: 3, name: 'Cermonies'},
    { id: 4, name: 'Competitive_Tiers'},
    { id: 5, name: 'Cuntent_Tiers'},
    { id: 6, name: 'Contracts' },
    { id: 7, name: 'Currencies'},
    { id: 8, name: 'Events'},
    { id: 9, name: 'Gamemodes'},
    { id: 10, name: 'Gear'},
    { id: 11, name: 'Level_Borders'},
    { id: 12, name: 'Maps', Link: 'ValorantMaps'},
    { id: 13, name: 'Player_Cards'},
    { id: 14, name: 'Players_Titles'},
    { id: 15, name: 'Seasons'},
    { id: 16, name: 'Sprays'},
    { id: 17, name: 'Themes'},
    { id: 18, name: 'Weapons'},
    { id: 19, name: 'Version'},
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
          <Link style={{
            color: `rgba(255,${randomColor1},${randomColor2})`,
          }} to={`/Page_one/Valorant/${list.Link}`}>{list.name}</Link>
        </li>
      </div>
    );
  });
  return (
    <>
      <h1>Valorant</h1>
      <ul>
        {APIList}
      </ul>

    </>
  );
}
