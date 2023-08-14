import { useNavigate } from 'react-router-dom';
import './Page_One.css';

export function Page_One() {
  const navigate = useNavigate();
  function redirectFortnite() {
    console.log('hej');
    navigate('/Page_one/Fortnite');
  }

  function redirectValorant() {
    console.log('hej');
    navigate('/Page_one/Valorant');
  }

  function redirectD4() {
    navigate('/Page_one/D4');
  }

  return (
    <>
      {/* <h1 id="choose_game">Välj ett spel!</h1> */}
      <div id="container_games">
        <div className="game" onClick={redirectFortnite}>
          <h2>Fortnite</h2>
          <img className="gameImg" src="img/Fortnite.jpg"></img>
        </div>
        <div className="game" onClick={redirectValorant}>
          <h2>Valorant</h2>
          <img className="gameImg" src="img/Valorant.png"></img>
        </div>
        <div className="game" onClick={redirectD4}>
          <h2>Diablo 4</h2>
          <img className="gameImg" src="img/Diablo-4-Patch.jpg"></img>
        </div>
      </div>
    </>
  );
}
