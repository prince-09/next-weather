"use client"
import { useEffect, useState } from "react";
import { getWeatherByCity } from "../api/getCityWeather";
import { getRecentSearchCity, updateCityInStorage } from "../api/localStoarge";
import SearchBar from "./SearchBar";
import WeatherReport from "./WeatherReport";

export function MainComponent() {
    const getCityList = getRecentSearchCity();
    const [city, setCity] = useState();
    const [weatherReport, setWeatherReport] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (weatherReport) return;

        if (getCityList.length > 0) setCity(getCityList[0]);
        fetchWeather(getCityList[0]);

    }, [weatherReport, getCityList])

    const fetchWeather = async (searchCity) => {
        if (!searchCity) return;

        setIsLoading(true);

        const weatherResponse = await getWeatherByCity(searchCity);
        setIsLoading(false);
        setWeatherReport(weatherResponse)
        if ( !weatherResponse.error ) {
            updateCityInStorage(city);
        }
    }

    return (
        <div className="flex flex-col items-center p-5 ">
            <SearchBar city={city} setCity={setCity} onSubmit={fetchWeather} />
            {weatherReport && <WeatherReport weatherReport={weatherReport} fetchWeather={fetchWeather} isLoading={isLoading} />}
            {!weatherReport && <p className="mt-12 text-xl font-bold">Please Select valid City first</p>}
        </div>
    )
}