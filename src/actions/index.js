const API_KEY = '330125c9569631024a508c0c680c673d';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}&q=`;

import axios from 'axios';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}${city},us`
  const req = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: req
  };
}
