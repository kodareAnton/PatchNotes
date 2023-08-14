import axios from 'axios';
import { useEffect } from 'react';

export function D4() {
  // useEffect(() => {
  //   axios
  //     .get(
  //       'https://news.blizzard.com/en-us/diablo4/23964909/diablo-iv-patch-notes'
  //     )
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  useEffect(() => {
    axios
      .get('http://localhost:3000/users/postit')
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>Diablo 4 patch notes</h1>
    </>
  );
}
