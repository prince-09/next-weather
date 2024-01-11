export function updateCityInStorage(city){
    if (!city) return;

    const cityList = localStorage.getItem('recent') || "";
    const recentCityArr = cityList.split("+").filter((it) => it != "")

    if (recentCityArr.findIndex((it) => it === city) !== -1) return;

    const newCityList = `${cityList}+${city}`;
    localStorage.setItem('recent', newCityList)
}

export function getRecentSearchCity() {
    const recentCity = localStorage.getItem('recent') || "";
    const recentCityArr = recentCity.split("+").filter((it) => it != "")
    recentCityArr.reverse();
    return recentCityArr;
}