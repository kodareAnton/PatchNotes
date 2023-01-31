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
          <img src="img/Fortnite.jpg"></img>
        </div>
        <div className="game" onClick={redirectValorant}>
          <img src="img/Valorant.png"></img>
        </div>
        {/* <div className="game">
          <img src="img/Apex.jpg"></img>
        </div>
        <div className="game">
          <img src="img/Overwatch_2.jpg"></img>
        </div>
        <div className="game">
          <img src="img/CsGo.jpg"></img>
        </div>
        <div className="game">
          <img src="img/LostArk.jpg"></img>
        </div>
        <div className="game">
          <img src="img/Borderlands3.jpg"></img>
        </div>
        <div className="game">
          <img src="img/VampireBloodhunt.jpg"></img>
        </div> */}
      </div>
    </>
  );
}
