import { getRecentSearchCity } from "../api/localStoarge";

function RecentSearch({ fetchWeather }) {

    const getCityList = getRecentSearchCity();

    return (
        <div className="w-full md:w-1/2 flex flex-col items-center">
            {/* Reacent Search Card */}
            <p className="text-white font-medium text-4xl">Recently Searched</p>
            <div className="flex flex-col bg-black px-4 py-4 rounded rounded-lg w-full md:w-3/4 mt-5 gap-2">
                {getCityList.map((item) => (
                    <div className="hover:bg-gray-600 bg-gray-800 p-2 rounded rounded-md cursor-pointer" onClick={() => fetchWeather(item)}>{item}</div>
                ))}
            </div>
        </div>
    )
}

export default RecentSearch;
