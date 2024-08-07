import axios from 'axios';
import { useEffect, useState } from 'react';
import './Cs.css';

export function Cs() {
  
  const baseUrl = import.meta.env.VITE_REACT_APP_PATCH_NOTES_API_HOST;

  interface IPatchnotes {
    patchNumber: string;
    csLogo: string;
    info: string;
  }

  const [patchNotes, setPatchNotes] = useState<IPatchnotes[]>();

  useEffect(() => {
    axios
      .get<IPatchnotes[]>(`${baseUrl}/games/csgo`)
      .then((res) => {
        const htmlString = res.data;
        setPatchNotes(htmlString);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (patchNotes == null) {
    return null;
  }

  console.log(patchNotes);

  const print = patchNotes.map((Notes) => {
    return (
      <>
        <div className="flex">
          <h3>{Notes.patchNumber}</h3>
          <img src={Notes.csLogo.slice(39, 113)} alt={'CsLogo'} />
        </div>
        <br />
        <p>{Notes.info}</p>{' '}
      </>
    );
  });

  return (
    <>
      {' '}
      <div className="patchNotes">{print}</div>
    </>
  );
}

export default Cs;