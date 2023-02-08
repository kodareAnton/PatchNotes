import { useNavigate } from 'react-router-dom';
import './Page_One.css';

export function Page_One() {
  const navigate = useNavigate();
  function redirect() {
    console.log('hej');
    navigate('/Page_one/Fortnite');
  }

  function redirectValorant() {
    console.log('hej');
    navigate('/Page_one/Valorant');
  }

  return (
    <>
      <h1 id="choose_game">Välj ett spel!</h1>
      <div id="container_games">
        <div className="game" onClick={redirect}>
          <img className="gameImg" src="img/Fortnite.jpg"></img>
        </div>
        <div className="game" onClick={redirectValorant}>
          <img className="gameImg" src="img/Valorant.png"></img>
        </div>
      </div>
    </>
  );
}
