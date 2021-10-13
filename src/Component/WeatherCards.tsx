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
    console.log(cityData)
    return (
        <div>
            {
                load ? <h1>Loading...</h1>
                    : <div className="card text-dark ms-4 me-4">
                        <img className="card-img-top w-25 mx-auto d-block" src={cityData.current.condition.icon} alt={cityData.current.condition.text} />
                        <div className="card-body">
                            <h5 className="card-title">{cityData.location.name}</h5><span>{cityData.location.country}</span>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div></div>
            }
        </div>
    )
}

export default WeatherCards