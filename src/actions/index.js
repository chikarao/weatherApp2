import axios from 'axios';
import { OPEN_WEATHER_MAP_API_KEY } from '../../credentials.js';

const API_KEY = OPEN_WEATHER_MAP_API_KEY;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  // console.log('Request:', request);
  // redux promise see action and looks at payload
  // if payload is promise, stops actions and dispatches
  // action when promise resolves and dispatches payload
  // redux-promise imported in src/index.js and applied
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
