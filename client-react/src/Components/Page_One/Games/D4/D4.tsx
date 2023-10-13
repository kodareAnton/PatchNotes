import axios from 'axios';
import { useEffect, useState } from 'react';
import './D4.css';

export function D4() {
  const baseUrl = import.meta.env.VITE_REACT_APP_PATCH_NOTES_API_HOST;

  const [patchNotes, setPatchNotes] = useState<IPatchnotes[]>();
  console.log(patchNotes);

  useEffect(() => {
    axios
      .get<IPatchnotes[]>(`${baseUrl}/games/d4`)
      .then((res) => {
        setPatchNotes(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  interface IPatchnotes {
    patchNumber: string;
    content: string;
  }

  if (patchNotes === undefined) {
    return null;
  }

  return (
    <div>
      {patchNotes.map((item, index) => (
        <div id="Diablo4" key={index}>
          <div dangerouslySetInnerHTML={{ __html: item.content }} />
        </div>
      ))}
    </div>
  );
}
