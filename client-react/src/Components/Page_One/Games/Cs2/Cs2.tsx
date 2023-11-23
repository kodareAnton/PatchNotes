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

      const baseUrl = 'http://localhost:3000/' 
    
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