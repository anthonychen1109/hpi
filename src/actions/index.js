import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY
const ROOT_URL = 'https://www.quandl.com/api/v3/datasets/';

export const FETCH_DATA = "fetch_data";

export function fetchData(stateName, callback) {
  const url = `${ROOT_URL}/FMAC/HPI_${stateName}.json?api_key=${API_KEY}`;
  const request = axios.get(url)
    .then(response=> response)
    .catch(err => alert(err));
  return {
    type: FETCH_DATA,
    payload: request
  }
}
