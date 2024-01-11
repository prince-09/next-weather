import WeatherItem from "./WeatherItem";

function WeatherCard({ current, location }) {

    const weatherType = current?.condition?.text
    const weatherIcon = current?.condition?.icon;
    const isDayOrNight = current?.is_day === 0 ? 'Night' : 'Day';

    return (
        <div className="flex flex-col items-center w-full md:w-1/2 bg-black px-4 py-10 md:mt-5 rounded rounded-lg">
            <div className="flex flex-row gap-4">
                <img src={`https://${weatherIcon}`} alt="sun" className="" />
                <p className="text-white font-bold text-6xl">{current?.temp_c}° C</p>
            </div>
            <p className="text-white text-base">{weatherType}, {isDayOrNight}</p>

            <p className="text-white text-xl">{location?.name}, {location?.region}, {location?.country}</p>
            <div className="flex flex-col md:flex-row gap-8 w-full mt-7">
                <div className="flex flex-col w-full md:w-1/2 gap-4">
                    <WeatherItem image='/humidity.png' value={`${current?.humidity}%`} text='Humidity' />
                    <WeatherItem image='/hot.png' value={`${current.temp_f}° F`} text='Temperature in F' />
                </div>
                <div className="flex flex-col w-full md:w-1/2 gap-4">
                    <WeatherItem image='/air-transmission.png' value={`${current?.wind_kph} Km/h`} text='Wind Speed' />
                    <WeatherItem image='/whirlwind.png' value={`${current?.gust_kph} Km/h`} text='Gust Speed' />
                </div>
            </div>
        </div>
    )
}

export default WeatherCard;
