import { fetchDataSingleton } from '@/service/fetchDataSingleton';

export default async function handler(req, res) {
res.send(fetchDataSingleton.finalsData)
}