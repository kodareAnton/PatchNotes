import axios from 'axios';
import { useEffect, useState } from 'react';
import './Cs2.css';

export function Cs2(){
    console.log('hej');

    interface IPatchnotes {
        patchNumber: string;
        csLogo: string;
        info: string;
      }

      const baseUrl = import.meta.env.VITE_REACT_APP_PATCH_NOTES_API_HOST;
    
      const [patchNotes, setPatchNotes] = useState<IPatchnotes[]>();
    
      useEffect(() => {
        axios
          .get<IPatchnotes[]>(`${baseUrl}/games/cs2`)
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
    
    return<></>
}