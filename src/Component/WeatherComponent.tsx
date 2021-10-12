import React from 'react'

const WeatherComponent = () => {
    return (
        <div className="container">
            <div className="cards">
                <h1>Weather App</h1>
                <h5 className="py-4">
                    <i className="wi wi-day-sunny display-1"></i>
                </h5>
                <h1 className="py-2">
                    25&deg;
                </h1>

                {/** show maximum and minimum temp */}
                {minMaxTemp(24,19)}

                <h4 className="py-3">
                    Slow Rain
                </h4>
            </div>
        </div>
    )
}

function minMaxTemp (min: number, max: number) {
    return (
        <h3>
            <span className="px-4">{min}&deg;</span>
            <span className="px-4">{max}&deg;</span>
        </h3>
    )
}

export default WeatherComponent
