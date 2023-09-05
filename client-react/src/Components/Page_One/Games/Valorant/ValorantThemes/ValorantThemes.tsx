import axios from "axios";
import { useEffect, useState } from "react";
import './ValorantThemes.css'

export function ValorantThemes() {
  interface ITheme {
    status: string;
    data: [
      {
        uuid: string;
        displayName: string;
        displayIcon: string;
        storeFeaturedImage: string;
        assetPath: string;
      }
    ];
  }

  const [APIThemes, setAPIThemes] = useState<ITheme>();
    
  useEffect(() => {
    axios
      .get('https://valorant-api.com/v1/themes')
      .then((res) => {
        setAPIThemes(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  
  return <div className="themes">
    {APIThemes?.data.map((theme) =>{

if(theme.displayIcon === null){
  return;
}else
        return<div className="theme" key={theme.displayName}><p>{theme.displayName}</p>
        <img className="themeImg" src={theme.displayIcon} alt={theme.displayName} /></div>
    })}
  </div>;
}
