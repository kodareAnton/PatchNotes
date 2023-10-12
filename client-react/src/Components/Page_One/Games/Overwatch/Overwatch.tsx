import axios from 'axios';
import { useEffect, useState } from 'react';

export function Overwatch() {
  const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;

  const [patchNotes, setPatchNotes] = useState('');
  console.log('patchnotes:', patchNotes);

  useEffect(() => {
    axios
      .get(`${baseUrl}/games/overwatch2`)
      .then((res) => {
        const htmlString = res.data;
        setPatchNotes(res.data);

        // Create a DOMParser to parse the HTML string
        const parser = new DOMParser();
        const htmlDocument = parser.parseFromString(htmlString, 'text/html');

        // Target a specific element by its selector
        const patches = htmlDocument.querySelector('.PatchNotes-body');

        // Access or manipulate the targeted element as needed
        if (patches) {
          // For example, you can access its innerHTML
          setPatchNotes(patches.innerHTML);
        }

        // Set the HTML content in the component state
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const htmlString = `${patchNotes}`;

  return (
    <>
      <h1>Overwatch</h1>
      <p className="Blizzard">Blizzard Entertainment</p>
      <div className="patchNotes">
        <div dangerouslySetInnerHTML={{ __html: htmlString }} />
      </div>
    </>
  );
}
