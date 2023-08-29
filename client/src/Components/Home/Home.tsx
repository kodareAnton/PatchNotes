import './Home.css';

export function Home() {
  const navigateToLogin = () => {
    window.location.replace('/Login');
  };

  const navigateToGames = () => {
    window.location.replace('/Page_One');
  };

  const cleanLocalStorage = () => {
    localStorage.clear();
    window.location.reload();
  };

  // hämtar hem användaren efter localstorage
  var getLocalStorageId = localStorage.getItem('userId');

  if (getLocalStorageId === null) {
    console.log('inte inloggad');
    return (
      <>
        <div className="placementDiv">
          <div id="HomeDiv">
            <h2>Updates</h2>
            <p>
              {' '}
              Follow your favorite games and its new updates here on my site.
              Create an account so you can save your favorite games and easy
              keep track on what new patchnotes and events thats coming up.{' '}
            </p>
            <button onClick={navigateToLogin}>Login</button>
            <button onClick={navigateToGames}>Games</button>
          </div>
        </div>
      </>
    );
  } else {
    console.log('success logged name');
    var userId = localStorage.getItem('userId');
    return (
      <>
        <div className="placementDiv">
          <div id="HomeDiv">
            <div id="userbox">
              {' '}
              <img id="userImg" src="/img/user.jpg" alt="user" />
              <p>{userId}</p>
            </div>
            <h2>Welcome back!</h2>
            <p>
              {' '}
              Weclome to your site! follow your favoirit games and see whats
              happening in them right now!{' '}
            </p>

            <button onClick={cleanLocalStorage}>Logout</button>
            <button onClick={navigateToGames}>Games</button>
          </div>
        </div>
      </>
    );
  }
}
