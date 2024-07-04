import axios from "axios";
import { useEffect, useState } from "react";
import './finals.css';

interface Icontent{
    content: string;
}

export function Finals (){

    console.log('finals');
    
    const baseUrl = import.meta.env.VITE_REACT_APP_PATCH_NOTES_API_HOST;

  const [patchNotes, setPatchNotes] = useState<Icontent[]>([]);
  console.log(patchNotes);

  useEffect(() => {
    axios
      .get<Icontent[]>(`${baseUrl}/games/finals`)
      .then((res) => {
        setPatchNotes(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (<>{patchNotes.map((content, i )=>
        <div key={i}>
          <div dangerouslySetInnerHTML={{ __html: content.content }} />
        </div>

  )}</>)
}

export default Finals;