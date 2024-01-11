import RecentSearch from "./RecentSearch";
import InvalidCity from "./WeatherBox/InvalidCity";
import Loading from "./WeatherBox/Loading";
import WeatherCard from "./WeatherBox/WeatherCard";

function WeatherReport({ weatherReport, fetchWeather, isLoading }) {
    const { location, current, error } = weatherReport;

    return (
        <div className="flex md:flex-row flex-col gap-4 w-full mt-12 items-center">
            <RecentSearch fetchWeather={fetchWeather} />
            {isLoading ? <Loading /> : (
                <>
                {!error ? <WeatherCard location={location} current={current} /> : <InvalidCity message={error?.message}/> }
                </>
            )}
            
            
            
        </div>
    )
}

export default WeatherReport;
