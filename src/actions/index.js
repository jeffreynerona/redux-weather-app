const API_KEY = '9e753fe9794a0349189374c7fb329bfc';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},ph`;

	return {
		type: FETCH_WEATHER
	};
}