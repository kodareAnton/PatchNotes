import axios from "axios";
import { useEffect, useState } from "react";

export function FortniteNews() {
  interface News {
    status: 200;


    // interface för Fortnite API'et
    data: {

      br: {
      hash: string;
      date: string;
      image: string;

      motds: [
        {
          id: string;
          title: string;
          tabTitle: string;
          body: string;
          image: string;
          tileImage: string;
          sortingPriority: string;
          hidden: boolean;
        }
      ];

      messages: [
        {
          title: string;
          body: string;
          image: string;
          adspace: string;
        }
      ];
    }
    };
  }

  // skriv ut uppdateringar vi https://dash.fortnite-api.com/
  const [News, setNews] = useState<News>();
  console.log(News);

  //

  useEffect(() => {
    axios
    .get<News>("https://fortnite-api.com/v2/news")
      .then((res) => {
        setNews(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>{News?.data.br.date}</h1>
      <img src={News?.data.br.image} alt={News?.data.br.image} />
    </div>
  );
}
