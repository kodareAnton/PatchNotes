import { useNavigate } from 'react-router-dom';
import './Page_One.css';

export function Page_One() {
  // skappa till snyggare
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

  function redirectCs() {
    navigate('/Page_one/Cs');
  }

  function redirectOverwatch() {
    navigate('/Page_one/Overwatch');
  }

  return (
    <>
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
        <div className="game" onClick={redirectCs}>
          <h2>Cs</h2>
          <img className="gameImg" src="img/CsGo.jpg"></img>
        </div>
        <div className="game" onClick={redirectOverwatch}>
          <h2>Overwatch 2</h2>
          <img className="gameImg" src="img/Overwatch_2.jpg"></img>
        </div>
      </div>
    </>
  );
}
