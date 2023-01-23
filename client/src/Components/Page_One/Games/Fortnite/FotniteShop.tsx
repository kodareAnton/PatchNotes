import axios from "axios";
import { useEffect, useState } from "react";

export function FortniteShop() {
 
interface News {
status: 200,
data: {
  hash: string,
  date: String,
  image: string,

  motds: [ {
    id: string,
  title: string,
  tabTitle: string,
  body: string,
  image: string,
  tileImage: string,
  sortingPriority: string,
  hidden: boolean,
  }
  ]

  messages: [{
    title: string
    body: string
    image: string
    adspace: string
  }]
}
}

// skriv ut uppdateringar vi https://dash.fortnite-api.com/
  const [Shop, setShop] = useState();

  useEffect(() => {
    axios
      .get("https://fortnite-api.com/v2/news")
      .then((res) => {
        console.log(res.data.data);
        setShop(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return <></>;
}
