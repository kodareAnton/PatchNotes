import { useNavigate } from 'react-router-dom';
import './Page_One.css';
import { Xbox, Playstation, Steam } from 'react-bootstrap-icons';

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
        <div className="game" onClick={redirectD4}>
          {/* <img className="gameImgOverlay" src="img/diablo4-logo.webp"></img> */}
          <img className="gameImg" src="img/diablo4.webp" alt="diablo4"></img>
          <h2>Diablo IV</h2>
          <p className="gameimginfo">Action RPG</p>
          <div>
            <Xbox className="gameIcons" />
            <Playstation className="gameIcons" />
          </div>
        </div>
        <div className="game" onClick={redirectCs}>
          <img className="gameImg" src="img/cs2.jpg" alt="cs2"></img>
          <h2>Cs2</h2>
          <p className="gameimginfo">First Person Shooter</p>
          <div>
            <Steam className="gameIcons" />
          </div>
        </div>
        <div className="game" onClick={redirectFortnite}>
          <img className="gameImg" src="img/fortnite.png" alt="Fortnite"></img>
          <h2>Fortnite</h2>
          <p className="gameimginfo">Battle royale</p>
          <div>
            <Xbox className="gameIcons" />
            <Playstation className="gameIcons" />
          </div>
        </div>
        <div className="game" onClick={redirectValorant}>
          <img className="gameImg" src="img/valorant.webp" alt="valorant"></img>
          <h2>Valorant</h2>
          <p className="gameimginfo">Hero shooter Tactical shooter</p>
          <div>
            <Steam className="gameIcons" />
            <Xbox className="gameIcons" />
            <Playstation className="gameIcons" />
          </div>
        </div>
        <div className="game" onClick={redirectOverwatch}>
          <img
            className="gameImg WIP"
            src="img/overwatch2.webp"
            alt="overwatch2"
          ></img>
          <h2>Overwatch 2</h2>
          <p className="gameimginfo">Team-Based Action</p>
          <div>
            <Steam className="gameIcons" />
            <Xbox className="gameIcons" />
            <Playstation className="gameIcons" />
          </div>
          <p></p>
        </div>
      </div>
    </>
  );
}
