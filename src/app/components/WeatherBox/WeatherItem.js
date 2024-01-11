function WeatherItem({ image, value, text}) {
    return (
        <div className="flex flex-row gap-1">
            <img src={image} className="h-10" />
            <div className="flex flex-col items-center w-full">
                <p className="text-base font-thin">{value}</p>
                <p className="text-xs tracking-wide font-thin">{text}</p>
            </div>
        </div>
    )
}

export default WeatherItem;
