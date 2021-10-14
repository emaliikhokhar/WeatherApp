import { useEffect, useState } from 'react'

interface IProps {
    API_Key: string
    city: string
}


const WeatherCards = (props: IProps) => {
    const [cityData, setCityData] = useState<any>();
    const [load, setLoad] = useState<boolean>(true);
    useEffect(() => {
        let response;
        async function FetchMyAPI() {
            response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${props.API_Key}&q=${props.city}&aqi=yes`)
                .then(response => response.json());
            setCityData(response)
            setLoad(false);
        }
        FetchMyAPI();
    }, [])
    return (
        <div>
            {
                load ? <i className="fas fa-spinner fa-pulse">Loading...</i>
                    : <div className="card text-dark ms-4 me-4 h-100" style={{width: "250px"}}>
                        <img className="card-img-top w-25 mx-auto d-block mt-3" src={cityData.current.condition.icon} alt={cityData.current.condition.text} />
                        <div className="card-body">
                            <h5 className="card-title ">{cityData.location.name}</h5><span className="heading">{cityData.location.country}</span>
                            <div className="pt-4">
                                <p className="heading">Temperature</p>
                                <p className="title">{cityData.current.temp_c}&deg;C</p>
                            </div>
                        </div></div>
            }
        </div>
    )
}

export default WeatherCards