import { fetchDataSingleton } from '@/service/fetchDataSingleton'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {

  if(!global.fetchRunning){
    fetchDataSingleton.fetchData();
    global.fetchRunning = true;
    console.log(global.fetchRunning);
  }

  return <Component {...pageProps} />
}


