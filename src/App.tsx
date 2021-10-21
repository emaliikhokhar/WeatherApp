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
  const cities: string[] = ["London", "Lahore", "Delhi", "Istanbul", "Paris"]
  const [searchCity, setSearchCity] = useState<string>("Islamabad");

  const settingSearchedCity = (city: string) => {
    console.log(city, "in app")
    setSearchCity(city)
  }
  console.log(searchCity)
  
    return (
      <div className="App">
        <div>
            <p className="heading is-size-2 mt-4">Weather</p>
        </div>
        <div className="mt-4 d-flex justify-content-center">
          <SearchBar settingSearchedCity={settingSearchedCity}/>
        </div>
        <div>
          <WeatherComponent searched={searchCity} API_Key={API_Key}/>
        </div>
        <div className="d-flex justify-content-center mt-4" >
          {
            cities.map((elem) => {
              return <WeatherCards API_Key={API_Key} city={elem} key={elem}/>
            })
          }
        </div>
      </div>
    );
}

export default App;
