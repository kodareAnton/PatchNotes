import { useParams } from 'react-router-dom';
import { FortniteBanners } from './FortniteBanners';
import { FortniteCosmetics } from './FortniteCosmetics';
import { FortniteMap } from './FortniteMap';
import { FortniteShop } from './FortntiteShop';
import { FortniteNews } from './FotniteNews';

export function CheckComponent() {
  const API = [
    { id: 0, name: 'AES', link: 'AES' },
    {
      id: 1,
      name: 'Banners',
      link: 'FortniteBanners',
      content: <FortniteBanners />,
    },
    {
      id: 2,
      name: 'FortniteCosmetics',
      content: <FortniteCosmetics />,
    },
    { id: 3, name: 'CreatorCode', link: 'CreatorCode' },
    { id: 4, name: 'Map', link: 'FortniteMap', content: <FortniteMap /> },
    { id: 5, name: 'News', link: 'FortniteNews', content: <FortniteNews /> },
    { id: 6, name: 'Playlists', link: 'Playlists' },
    { id: 7, name: 'Shop', link: 'FortniteShop', content: <FortniteShop /> },
    { id: 8, name: 'Stats', link: 'Stats' },
  ];

  let { id } = useParams();
  return (
    <>
      {API.map((Forre) => {
        if (id === Forre.link) {
          return <>{Forre.content}</>;
        } else {
          return <></>;
        }
      })}
    </>
  );
}
