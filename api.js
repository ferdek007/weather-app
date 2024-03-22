const API_KEY = '36928e99bab645ad9b6173713240803';
const BASE_URL = 'https://api.weatherapi.com/v1';
const FORECAST_DAYS = '7';
const LANGUAGE = 'pl';

const DEFAULT_PARAMS = {
    key: API_KEY,
    days: FORECAST_DAYS,
    lang: LANGUAGE
};

const fetchForecastData = async (location) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/forecast.json`, {
            params: {
                ...DEFAULT_PARAMS,
                q: location,
            }
        });

        return data;
    } catch (err) {
        if (err.response) {
            console.error("Request was made but received an error response:");
            console.error("Status Code:", err.response.status);
            console.error("Response Data:", err.response.data);
            console.error("Error Message:", err.response.data.error.message);

            if (err.response.status === 400) {
                alert(err.response.data.error.message);
            } else {
                alert("An error occurred while fetching forecast data. Please try again later.");
            }
        }
    }
};
