import axios from 'axios';
import { useEffect, useState } from 'react';
import './D4.css';

export function D4() {
  const [patchNotes, setPatchNotes] = useState('');
  console.log('patchnotes:', patchNotes);

  useEffect(() => {
    axios
      .get('http://localhost:3000/games/d4')
      .then((res) => {
        setPatchNotes(res.data);

        const htmlString = res.data;

        // Create a DOMParser to parse the HTML string
        const parser = new DOMParser();
        const htmlDocument = parser.parseFromString(htmlString, 'text/html');

        // Target a specific element by its selector
        const patches = htmlDocument.querySelector('.ArticleDetail-content');

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
      <h1>Diablo 4 patch notes</h1>

      <p className="Blizzard">Blizzard Entertainment</p>
      <div className="patchNotes">
        <div dangerouslySetInnerHTML={{ __html: htmlString }} />
      </div>
    </>
  );
}