export function updateCityInStorage(city){
    if (!city) return;

    if (typeof window === undefined){
        return;
    }
    const cityList = window.localStorage.getItem('recent') || "";
    const recentCityArr = cityList.split("+").filter((it) => it != "")

    if (recentCityArr.findIndex((it) => it === city) !== -1) return;

    const newCityList = `${cityList}+${city}`;
    localStorage.setItem('recent', newCityList)
}

export function getRecentSearchCity() {
    if (typeof window === 'undefined') {
        return;
    }
    const recentCity = window.localStorage.getItem('recent') || "";
    const recentCityArr = recentCity.split("+").filter((it) => it != "")
    recentCityArr.reverse();
    return recentCityArr;
}