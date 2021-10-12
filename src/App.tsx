import React, { useEffect, useState } from 'react';
import './App.css';
import WeatherComponent from './Component/WeatherComponent';
import "bootstrap/dist/css/bootstrap.min.css"
import 'weather-icons/css/weather-icons.css'

//API Key
const API_Key: string = "f5bdf3f34a8b21ddb038918c128e2ccb"

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    let response;
    async function FetchMyAPI() {
      response = await fetch(`api.openweathermap.org/data/2.5/weather?q=London&appid=${API_Key}`)
      console.log(response)
    }
    FetchMyAPI();
  })

  // options:Object = {
  //   url: `api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_Key}`,
  //   method: 'POST',
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json'
  //   }
  // };

    return (
      <div className="App">
        <WeatherComponent />
      </div>
    );
}

export default App;
