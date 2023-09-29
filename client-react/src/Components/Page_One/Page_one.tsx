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
            <svg
              fill="white"
              opacity="0.6"
              width="1rem"
              height="1rem"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 26.578125 14.339844 C 26.578125 14.339844 28.882813 14.457031 28.882813 13.101563 C 28.882813 11.332031 25.8125 9.738281 25.8125 9.738281 C 25.8125 9.738281 26.292969 8.71875 26.59375 8.148438 C 26.894531 7.578125 27.738281 5.359375 27.8125 4.851563 C 27.90625 4.210938 27.761719 4.011719 27.761719 4.011719 C 27.554688 5.378906 25.328125 9.316406 25.148438 9.449219 C 22.976563 8.433594 19.992188 8.148438 19.992188 8.148438 C 19.992188 8.148438 17.070313 2 14.320313 2 C 11.59375 2 11.609375 7.265625 11.609375 7.265625 C 11.609375 7.265625 10.839844 5.773438 9.871094 5.773438 C 8.457031 5.773438 7.992188 7.90625 7.992188 10.222656 C 5.203125 10.222656 2.855469 10.847656 2.644531 10.90625 C 2.4375 10.964844 1.777344 11.445313 2.074219 11.386719 C 2.6875 11.191406 5.554688 10.746094 8.0625 10.964844 C 8.203125 13.164063 9.488281 16.03125 9.488281 16.03125 C 9.488281 16.03125 6.730469 20.023438 6.730469 22.871094 C 6.730469 23.621094 7.058594 24.992188 9.035156 24.992188 C 10.695313 24.992188 12.558594 23.996094 12.90625 23.796875 C 12.601563 24.230469 12.375 25.0625 12.375 25.445313 C 12.375 25.757813 12.5625 26.644531 13.839844 26.644531 C 15.480469 26.644531 17.316406 25.386719 17.316406 25.386719 C 17.316406 25.386719 19.050781 28.261719 20.53125 29.578125 C 20.929688 29.933594 21.3125 30 21.3125 30 C 21.3125 30 19.839844 28.585938 17.902344 24.9375 C 19.703125 23.828125 21.578125 21.203125 21.578125 21.203125 C 21.578125 21.203125 21.800781 21.210938 23.511719 21.210938 C 26.191406 21.210938 29.996094 20.648438 29.996094 18.519531 C 30 16.324219 26.578125 14.339844 26.578125 14.339844 Z M 26.875 13.015625 C 26.875 13.792969 26.136719 13.785156 26.136719 13.785156 L 25.574219 13.820313 C 25.574219 13.820313 24.507813 13.261719 23.859375 12.996094 C 23.859375 12.996094 24.863281 11.453125 25.097656 11.023438 C 25.273438 11.128906 26.875 12.128906 26.875 13.015625 Z M 15.660156 5.097656 C 16.921875 5.097656 18.71875 8.066406 18.71875 8.066406 C 18.71875 8.066406 15.914063 7.816406 13.605469 9.171875 C 13.667969 7.035156 14.386719 5.097656 15.660156 5.097656 Z M 10.671875 7.503906 C 11.070313 7.503906 11.460938 7.992188 11.625 8.402344 C 11.625 8.675781 11.765625 10.269531 11.765625 10.269531 L 9.453125 10.179688 C 9.453125 8.097656 10.269531 7.503906 10.671875 7.503906 Z M 10.429688 21.976563 C 9.164063 21.976563 8.90625 21.273438 8.90625 20.640625 C 8.90625 19.207031 10.050781 17.199219 10.050781 17.199219 C 10.050781 17.199219 11.335938 19.898438 13.574219 21.035156 C 12.464844 21.6875 11.546875 21.976563 10.429688 21.976563 Z M 14.535156 24.800781 C 13.648438 24.800781 13.539063 24.226563 13.539063 24.09375 C 13.539063 23.683594 13.863281 23.195313 13.863281 23.195313 C 13.863281 23.195313 15.351563 22.191406 15.445313 22.082031 L 16.546875 24.136719 C 16.546875 24.136719 15.421875 24.800781 14.535156 24.800781 Z M 17.300781 23.683594 C 16.761719 22.742188 16.363281 21.757813 16.363281 21.757813 C 16.363281 21.757813 18.578125 21.898438 19.769531 20.671875 C 19.027344 21.003906 17.84375 21.425781 16.46875 21.296875 C 19.34375 18.765625 21.023438 16.929688 22.441406 15.035156 C 22.320313 14.886719 21.671875 14.433594 21.511719 14.359375 C 20.65625 15.390625 17.324219 18.949219 14.238281 20.710938 C 10.332031 18.582031 9.511719 12.320313 9.429688 11.019531 L 11.5625 11.222656 C 11.5625 11.222656 10.761719 12.644531 10.761719 13.691406 C 10.761719 14.734375 10.886719 14.789063 10.886719 14.789063 C 10.886719 14.789063 10.859375 12.96875 11.984375 11.5625 C 12.84375 16.125 13.738281 18.460938 14.433594 19.855469 C 14.789063 19.707031 15.449219 19.414063 15.449219 19.414063 C 15.449219 19.414063 13.480469 13.738281 13.589844 9.898438 C 14.484375 9.421875 15.808594 8.929688 17.300781 8.929688 C 21.230469 8.929688 24.390625 10.617188 24.390625 10.617188 L 23.15625 12.34375 C 23.15625 12.34375 22.054688 10.351563 20.496094 9.996094 C 21.316406 10.605469 22.238281 11.414063 22.714844 12.574219 C 19.457031 11.304688 15.527344 10.632813 14.265625 10.484375 C 14.15625 10.949219 14.171875 11.613281 14.171875 11.613281 C 14.171875 11.613281 19.441406 12.585938 23.277344 14.777344 C 23.25 19.574219 18.023438 23.257813 17.300781 23.683594 Z M 22.292969 20.097656 C 22.292969 20.097656 23.929688 17.953125 23.902344 15.109375 C 23.902344 15.109375 26.546875 16.746094 26.546875 18.34375 C 26.546875 20.125 22.292969 20.097656 22.292969 20.097656 Z" />
            </svg>
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
          <p className="gameimginfo">Hero/Tactical shooter</p>
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
            <svg
              fill="white"
              opacity="0.6"
              width="1rem"
              height="1rem"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 26.578125 14.339844 C 26.578125 14.339844 28.882813 14.457031 28.882813 13.101563 C 28.882813 11.332031 25.8125 9.738281 25.8125 9.738281 C 25.8125 9.738281 26.292969 8.71875 26.59375 8.148438 C 26.894531 7.578125 27.738281 5.359375 27.8125 4.851563 C 27.90625 4.210938 27.761719 4.011719 27.761719 4.011719 C 27.554688 5.378906 25.328125 9.316406 25.148438 9.449219 C 22.976563 8.433594 19.992188 8.148438 19.992188 8.148438 C 19.992188 8.148438 17.070313 2 14.320313 2 C 11.59375 2 11.609375 7.265625 11.609375 7.265625 C 11.609375 7.265625 10.839844 5.773438 9.871094 5.773438 C 8.457031 5.773438 7.992188 7.90625 7.992188 10.222656 C 5.203125 10.222656 2.855469 10.847656 2.644531 10.90625 C 2.4375 10.964844 1.777344 11.445313 2.074219 11.386719 C 2.6875 11.191406 5.554688 10.746094 8.0625 10.964844 C 8.203125 13.164063 9.488281 16.03125 9.488281 16.03125 C 9.488281 16.03125 6.730469 20.023438 6.730469 22.871094 C 6.730469 23.621094 7.058594 24.992188 9.035156 24.992188 C 10.695313 24.992188 12.558594 23.996094 12.90625 23.796875 C 12.601563 24.230469 12.375 25.0625 12.375 25.445313 C 12.375 25.757813 12.5625 26.644531 13.839844 26.644531 C 15.480469 26.644531 17.316406 25.386719 17.316406 25.386719 C 17.316406 25.386719 19.050781 28.261719 20.53125 29.578125 C 20.929688 29.933594 21.3125 30 21.3125 30 C 21.3125 30 19.839844 28.585938 17.902344 24.9375 C 19.703125 23.828125 21.578125 21.203125 21.578125 21.203125 C 21.578125 21.203125 21.800781 21.210938 23.511719 21.210938 C 26.191406 21.210938 29.996094 20.648438 29.996094 18.519531 C 30 16.324219 26.578125 14.339844 26.578125 14.339844 Z M 26.875 13.015625 C 26.875 13.792969 26.136719 13.785156 26.136719 13.785156 L 25.574219 13.820313 C 25.574219 13.820313 24.507813 13.261719 23.859375 12.996094 C 23.859375 12.996094 24.863281 11.453125 25.097656 11.023438 C 25.273438 11.128906 26.875 12.128906 26.875 13.015625 Z M 15.660156 5.097656 C 16.921875 5.097656 18.71875 8.066406 18.71875 8.066406 C 18.71875 8.066406 15.914063 7.816406 13.605469 9.171875 C 13.667969 7.035156 14.386719 5.097656 15.660156 5.097656 Z M 10.671875 7.503906 C 11.070313 7.503906 11.460938 7.992188 11.625 8.402344 C 11.625 8.675781 11.765625 10.269531 11.765625 10.269531 L 9.453125 10.179688 C 9.453125 8.097656 10.269531 7.503906 10.671875 7.503906 Z M 10.429688 21.976563 C 9.164063 21.976563 8.90625 21.273438 8.90625 20.640625 C 8.90625 19.207031 10.050781 17.199219 10.050781 17.199219 C 10.050781 17.199219 11.335938 19.898438 13.574219 21.035156 C 12.464844 21.6875 11.546875 21.976563 10.429688 21.976563 Z M 14.535156 24.800781 C 13.648438 24.800781 13.539063 24.226563 13.539063 24.09375 C 13.539063 23.683594 13.863281 23.195313 13.863281 23.195313 C 13.863281 23.195313 15.351563 22.191406 15.445313 22.082031 L 16.546875 24.136719 C 16.546875 24.136719 15.421875 24.800781 14.535156 24.800781 Z M 17.300781 23.683594 C 16.761719 22.742188 16.363281 21.757813 16.363281 21.757813 C 16.363281 21.757813 18.578125 21.898438 19.769531 20.671875 C 19.027344 21.003906 17.84375 21.425781 16.46875 21.296875 C 19.34375 18.765625 21.023438 16.929688 22.441406 15.035156 C 22.320313 14.886719 21.671875 14.433594 21.511719 14.359375 C 20.65625 15.390625 17.324219 18.949219 14.238281 20.710938 C 10.332031 18.582031 9.511719 12.320313 9.429688 11.019531 L 11.5625 11.222656 C 11.5625 11.222656 10.761719 12.644531 10.761719 13.691406 C 10.761719 14.734375 10.886719 14.789063 10.886719 14.789063 C 10.886719 14.789063 10.859375 12.96875 11.984375 11.5625 C 12.84375 16.125 13.738281 18.460938 14.433594 19.855469 C 14.789063 19.707031 15.449219 19.414063 15.449219 19.414063 C 15.449219 19.414063 13.480469 13.738281 13.589844 9.898438 C 14.484375 9.421875 15.808594 8.929688 17.300781 8.929688 C 21.230469 8.929688 24.390625 10.617188 24.390625 10.617188 L 23.15625 12.34375 C 23.15625 12.34375 22.054688 10.351563 20.496094 9.996094 C 21.316406 10.605469 22.238281 11.414063 22.714844 12.574219 C 19.457031 11.304688 15.527344 10.632813 14.265625 10.484375 C 14.15625 10.949219 14.171875 11.613281 14.171875 11.613281 C 14.171875 11.613281 19.441406 12.585938 23.277344 14.777344 C 23.25 19.574219 18.023438 23.257813 17.300781 23.683594 Z M 22.292969 20.097656 C 22.292969 20.097656 23.929688 17.953125 23.902344 15.109375 C 23.902344 15.109375 26.546875 16.746094 26.546875 18.34375 C 26.546875 20.125 22.292969 20.097656 22.292969 20.097656 Z" />
            </svg>
          </div>
          <p></p>
        </div>
      </div>
    </>
  );
}
