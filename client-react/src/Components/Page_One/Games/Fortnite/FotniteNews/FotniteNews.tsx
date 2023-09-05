import axios from 'axios';
import { useEffect, useState } from 'react';
import './FortniteNews.css';

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
      };
    };
  }

  // skriv ut uppdateringar vi https://dash.fortnite-api.com/
  const [News, setNews] = useState<News>();
  console.log(News);

  // hämtar från Fortnite Api
  useEffect(() => {
    axios
      .get<News>('https://fortnite-api.com/v2/news')
      .then((res) => {
        setNews(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div id="news">
      <div className="contentInNews">
        <h1>{News?.data.br.date.slice(0, -10)}</h1>
        <img
          className="ContentImg"
          src={News?.data.br.image}
          alt={News?.data.br.image}
        />
        {News?.data.br.motds.map((text) => {
          return (
            <>
              <h2>{text.title}</h2>
              <p>{text.body}</p>
            </>
          );
        })}
      </div>
    </div>
  );
}
