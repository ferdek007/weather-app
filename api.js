const API_KEY = '36928e99bab645ad9b6173713240803';
const BASE_URL = 'https://api.weatherapi.com/v1';
const FORCAST_CITY = 'Warsaw';
const FORCAST_DAYS = '7';
const LANGUAGE = 'pl';

const DEFAULT_PARAMS = {
    key: API_KEY,
    days: FORCAST_DAYS,
    lang: LANGUAGE
};

const fetchForecastData = async (location) => {
    const { data } = await axios.get(`${BASE_URL}/forecast.json`, {
        params: {
            ...DEFAULT_PARAMS,
            q: location,
        }
    });

    return data;
};

module.exports = fetchForecastData; 