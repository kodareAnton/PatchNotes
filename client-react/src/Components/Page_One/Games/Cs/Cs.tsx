import axios from 'axios';
import { useEffect, useState } from 'react';

export function Cs() {
  const [patchNotes, setPatchNotes] = useState('');
  console.log('patchnotes:', patchNotes);

  useEffect(() => {
    axios
      .get('http://localhost:3000/games/cs')
      .then((res) => {
        const htmlString = res.data;
        console.log(htmlString);

    
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {' '}
      <h1>CsGo Patch Notes</h1>
      <div className="patchNotes">
       
      </div>
    </>
  );
}
