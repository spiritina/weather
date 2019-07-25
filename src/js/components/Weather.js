import React from 'react';
import Icon from './Icon';


class Weather extends React.Component{
render(){
    let weather = this.props.weather;
    let weatherDescrSVG = weather.weatherDescprotion.img.map((src, index) => <Icon className='temperature' 
                                                                                    key={index} 
                                                                                    glyph={src.id} 
                                                                                    viewBox={src.viewBox} /> );
    let weatherDescrText = weather.weatherDescprotion.text.map((text, index) => <p key={index}>{text}</p>)
    return(
        <div className='weather row'>
            <div className="col">
                <h2>{weather.weather.city}, {weather.weather.country}</h2>
                <p>Max temperature: {Math.round(weather.weather.temperature.max)} &#186; C</p>
                <p>Humidity: {weather.weather.humidity} %</p>
                <p>Pressure: {weather.weather.pressure} MP</p>
                <p>Wind: {weather.weather.wind.speed} m/s {weather.windDirection}</p>
                {weatherDescrText}
            </div>
            <div className="col">
                <div className="row">
                    {weatherDescrSVG}{<Icon className='temperature' 
                                            glyph={weather.temperatureSVG.id} 
                                            viewBox={weather.temperatureSVG.viewBox} />}
                </div>
            </div>
        </div>
        )
}
}
export default Weather;
