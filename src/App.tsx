import React, { useEffect, useState } from 'react';
import './App.css';
import WeatherComponent from './Component/WeatherComponent';
import "bootstrap/dist/css/bootstrap.min.css"
import 'weather-icons/css/weather-icons.css'
import WeatherCards from './Component/WeatherCards';
import SearchBar from './Component/SearchBar';

//API Key
const API_Key: string = "f3a63dd6c483452c9fc61549211310"

const App = () => {

  // const [data, setData] = useState();
  const cities: string[] = ["London", "Lahore", "Delhi", "Istanbul", "Paris"]
  const [citiesState] = useState(cities);

  useEffect(() => {
    let response;
    async function FetchMyAPI() {
        response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_Key}&q=London&aqi=yes`);
        response = await response.json();
      }
      FetchMyAPI();
    })

    return (
      <div className="App">
        <div>
            <p className="heading is-size-2 mt-4">Weather</p>
        </div>
        <div className="mt-4 d-flex justify-content-center">
          <SearchBar/>
        </div>
        <div>
          <WeatherComponent />
        </div>
        <div className="d-flex justify-content-center mt-4" >
          {
            citiesState.map((elem) => {
              return <WeatherCards API_Key={API_Key} city={elem} key={elem}/>
            })
          }
        </div>
      </div>
    );
}

export default App;
