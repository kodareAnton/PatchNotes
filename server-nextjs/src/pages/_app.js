import { fetchDataSingleton } from '@/service/fetchDataSingleton'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {

  // fetchDataSingleton.fetchData();

  return <Component {...pageProps} />
}


