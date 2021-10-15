import React, { useState, useEffect } from 'react'

interface IProps {
    searched: string
    API_Key: string
}

const WeatherComponent = (props: IProps) => {
    const [cityData, setCityData] = useState<any>();
    const [load, setLoad] = useState<boolean>(true);
    useEffect(() => {
        let response;
        async function FetchMyAPI() {
            response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${props?.API_Key}&q=${props?.searched}&aqi=no`)
                .then(response => response.json());
                console.log(response)
            setCityData(response)
            setLoad(false);
        }
        FetchMyAPI();
    }, [props?.searched])
    return (
        <div>
            {
                load ? <i className="fas fa-spinner fa-pulse">Loading...</i>
                    : <div className="container">
                        <div className="cards">
                            <div className="justify-content-center d-flex mb-4 mr-5">
                                <img src={cityData.current.condition.icon} width="80px"/>
                                <p className="fs-2 pt-3">{cityData.current.condition.text}</p>
                            </div>
                            <div style={{marginTop: "-15px"}}>
                                <p className="title">{cityData.location.name}</p>
                                <p className="heading" style={{marginTop: "-15px"}}>{cityData.location.region}, {cityData.location.country}</p>
                            </div>
                            <div className="pt-3">
                                <p className="heading">Temperature</p>
                                <p className="title">{cityData.current.temp_c}&deg;C</p>
                            </div>
                            <div>
                                <p className="heading">Humidity</p>
                                <p className="title">{cityData.current.humidity} RH</p>
                            </div>
                            <div className="pb-1">
                                <p className="heading">Wind</p>
                                <p className="title">{cityData.current.wind_kph} kph</p>
                            </div>
                        </div>
                    </div>
            }
        </div>

    )
}

export default WeatherComponent
