import { Link, Route, Routes } from 'react-router-dom';
import { ValorantShop } from './ValorantShop';

export function Valorant() {
  return (
    <>
      <h1>Valorant</h1>
      <ul>
        <li>
          <Link to={'/Page_one/Valorant/ValorantShop'}>Shop</Link>
        </li>
      </ul>
    </>
  );
}
