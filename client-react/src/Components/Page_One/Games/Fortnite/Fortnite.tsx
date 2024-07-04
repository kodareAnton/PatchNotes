import { Link } from 'react-router-dom';
import { CheckComponent } from './CheckComponet';
import './Fortnite.css';
import { FortniteBanners } from './FortniteBanners/FortniteBanners';
import { FortniteCosmetics } from './FortniteCosmetics/FortniteCosmetics';
import { FortniteMap } from './FortniteMap/FortniteMap';
import { FortniteShop } from './FortntiteShop/FortntiteShop';
import { FortniteNews } from './FotniteNews/FotniteNews';

export function Fortnite() {
  const API = [
    // { id: 0, name: 'AES', link: 'AES' },
    {
      id: 1,
      name: 'Banners',
      link: 'FortniteBanners',
      content: <FortniteBanners />,
    },
    {
      id: 2,
      name: 'Cosmetics',
      link: 'FortniteCosmetics',
      content: <FortniteCosmetics />,
    },
    // { id: 3, name: 'CreatorCode', link: 'CreatorCode' },
    { id: 4, name: 'Map', link: 'FortniteMap', content: <FortniteMap /> },
    { id: 5, name: 'News', link: 'FortniteNews', content: <FortniteNews /> },
    // { id: 6, name: 'Playlists', link: 'Playlists' },
    { id: 7, name: 'Shop', link: 'FortniteShop', content: <FortniteShop /> },
    // { id: 8, name: 'Stats', link: 'Stats' },
  ];

  // skriver ut all undermenyer som tillhör spelet med en map function
  const APIList = API.map((list, index) => {
    // skriver ut Nav listan
    return (
      <ul key={index} data-index={index}>
        <li id="random">
          {' '}
          <Link to={`/Page_one/Fortnite/${list.link}`}> {list.name}</Link>
        </li>
      </ul>
    );
  });

  return (
    <>
      <div id="randomDiv">
        <p className="extra">EXTRA</p>
        {APIList}
      </div>

      <CheckComponent />
    </>
  );
}

export default Fortnite;
