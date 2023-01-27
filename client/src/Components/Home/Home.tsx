import './Home.css';

export function Home() {
  const navigateToLogin = () => {
    window.location.replace('/Login');
  };

  const navigateToGames = () => {
    window.location.replace('/Page_One');
  };

  // hämtar hem användaren efter localstorage
  // var getLocalStorageId = localStorage.getItem('Username');

  // if (getLocalStorageId === '') {
  //   console.log('inte inloggad');
  //   return;
  // } else {
  //   console.log('success logged name');
  //   var loggedForm = (
  //     <div id="UserLoggedInProfil">
  //       {/* <img src="" alt="" /> */}
  //       <h1>{getLocalStorageId}</h1>
  //     </div>
  //   );
  // }

  return (
    <>
      <div className="placementDiv">
        <div id="HomeDiv">
          <h2>Updates</h2>
          <p>
            {' '}
            Follow your favorite games and its new updates here on my site.
            Create an account so you can save your favorite games and easy keep
            track on what new patchnotes and events thats coming up.{' '}
          </p>
          <button onClick={navigateToLogin}>Login</button>
          <button onClick={navigateToGames}>Updates</button>
        </div>
      </div>

      <div className="HomeCards">
        <div className="HomeCard">
          <h2>News1</h2>
          <p>babababa vbababa ba bababab aaba babab abab abab </p>
        </div>
        <div className="HomeCard">
          <h2>News2</h2>
          <p>baba vbababa ba bababab aaba babab abab abab </p>
        </div>
        <div className="HomeCard">
          <h2>News3</h2>
          <p>bababababab vbababa ba bababab aaba babab abab abab </p>
        </div>
      </div>
    </>
  );
}
