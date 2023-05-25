export default function WeatherMainInfo({ weather }){

    return(
        <div>
        <div>{weather?.location.name}</div>
        <div>{weather?.location.country}</div>
        <div>{weather?.current.temp_c} C°</div>
        <div>
            <div>
                <img src={`http:${weather?.current.condition.icon}`} width="128" alt={weather?.current.condition.text} />
            </div>
        </div>

        </div>
    );
}


