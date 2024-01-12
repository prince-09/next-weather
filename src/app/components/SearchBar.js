function SearchBar({ setCity, city, onSubmit, isLoading}) {
    return (
        <div className="w-full md:w-1/2">
            <div className="flex flex-row h-14 rounded-full bg-gray-100 p-1 w-full">
                <input
                    type="text"
                    placeholder="Search City"
                    value={city}
                    onFocus={() => console.log("Focus")}
                    onChange={(e) => setCity(e.target.value)}
                    className="bg-gray-100 text-black font-medium ml-4 w-4/5 outline-none	"
                />
                <button className={`${isLoading && 'animate-pulse'} bg-emerald-900 font-bold cursor-pointer text-white border rounded-full text-center w-1/5 px-2`} disabled={isLoading} onClick={() => onSubmit(city)}>Go</button>
                </div>
        </div>
    )
}

export default SearchBar;
