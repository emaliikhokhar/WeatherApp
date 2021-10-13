import React from 'react'
import { useEffect, useState } from 'react'

interface IProps {
    API_Key: string
    city: string
}

interface CityTypedObject {
    cityName: string
    country: string
    minTemp: number
    maxTemp: number
    currentTemp: number
}

const WeatherCards = (props: IProps) => {
    const [cityData, setCityData] = useState<Object | undefined>();
    let data: CityTypedObject = {
        cityName: "",
        country: "",
        minTemp: 0,
        maxTemp: 0,
        currentTemp: 0,
    }

    useEffect(() => {
        let response;
        async function FetchMyAPI() {
            response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${props.API_Key}&q=${props.city}&aqi=yes`)
                .then(response => response.json());
            setCityData(response)
        }
        FetchMyAPI();
    }, [])

    data.cityName = cityData.location.name;

    return (
        <div>

        </div>
    )
}

export default WeatherCards