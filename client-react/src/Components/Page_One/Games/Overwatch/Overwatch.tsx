import axios from 'axios';
import { useEffect, useState } from 'react';

export function Overwatch() {
  const baseUrl = import.meta.env.VITE_REACT_APP_PATCH_NOTES_API_HOST;

  interface IPatchnotes {
    content: string;
    title: string;
    section: string;
  }

  const [patchNotes, setPatchNotes] = useState<IPatchnotes[]>();

  useEffect(() => {
    axios
      .get<IPatchnotes[]>(`${baseUrl}/games/overwatch2`)
      .then((res) => {
        const htmlString = res.data;
        setPatchNotes(htmlString);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (patchNotes === undefined) {
    return null;
  }

  console.log('patchnotes:', patchNotes);

  const patchnote = patchNotes.map((patchnote, index) => {
    const parser = new DOMParser();
    const htmlDocument = parser.parseFromString(patchnote.content, 'text/html');

    // Target a specific element by its selector
    const patches = htmlDocument.querySelector('.PatchNotes-live');

    console.log('patches', patches);

    return (
      <div key={index}>
        <h3>{patchnote.title}</h3>
        {/* <div dangerouslySetInnerHTML={{ __html: patches?.innerHTML }} /> */}
      </div>
    );
  });

  return (
    <>
      <p className="Blizzard">Blizzard Entertainment</p>
      <div className="patchNotes">{patchnote}</div>
    </>
  );
}
