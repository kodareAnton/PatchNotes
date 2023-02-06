import axios from 'axios';
import { useEffect, useState } from 'react';
import './ValorantEvents.css';

export function ValorantEvents() {
  interface IEvents {
    status: string;
    data: [
      {
        uuid: string;
        displayName: string;
        shortDisplayName: string;
        startTime: string;
        endTime: string;
        assetPath: string;
      }
    ];
  }

  const [APIEvents, setAPIEvents] = useState<IEvents>();

  useEffect(() => {
    if (APIEvents) {
      if (APIEvents.data.length > 0) return;
    } else
      axios
        .get('https://valorant-api.com/v1/events')
        .then((res) => {
          setAPIEvents(res.data);
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
  }, []);

  return (
    <>
      {APIEvents?.data.map((event) => {
        const start = event.startTime;
        const end = event.endTime;

        return (
          <div className="event" key={event.displayName}>
            <h2>{event.displayName}</h2>
            <p>Event name: {event.shortDisplayName}</p>
            <p>Start Datum: {start}</p>
            <p>Slut Datum: {end}</p>
          </div>
        );
      })}
    </>
  );
}
