import {useEffect, useState} from "react";
import WeatherForm from "./weatherForm";
import WeatherMainInfo from "./weatherMainInfo";

export default function WeatherApp(){

    const [weather, setWeather] = useState(null);

    useEffect(() => {;//tenemos la posibilidad de ejecutar codigo cuando carga nuestr app o cada vez que existe un render de todo el estado de nuestra app o cuando el componente se destruye
        loadInfo();
    },[])// si dejo el arreglo vacio una vez se va a ejecutar una sola vez cuando se crea nuestro componente 

    useEffect(() => {
        document.title = `Weather | ${weather?.location.name ?? ""}` //si esto es igual a null regresa un string vacio
    },[weather]) //quiero que cada vez que cambie el valor de weather, quiero que suceda lo siguiente 


   async function loadInfo(city = "viale"){
    try {
        const request = await fetch(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`);

        const json = await request.json();

        setWeather(json)

        console.log(json);
    } catch (error) {
        
    }
    }

    function handleChangeCity(city){
        setWeather(null);
        loadInfo(city);
    }

    return (
    <div>
        <WeatherForm onChangeCity={handleChangeCity}/>
        <WeatherMainInfo weather={weather} />
    </div>
    );
}

