export async function getWeatherByCity(city) {
    const baseUrl = process.env.WEATHER_BASE_URL;
    const API_KEY = process.env.WEATHER_API_KEY;
    const url = `${baseUrl}/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no`
    const response = await fetch(url)
    const weatherForecast = await response.json()

    return weatherForecast;
}