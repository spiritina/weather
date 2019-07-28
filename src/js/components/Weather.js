import React from 'react';
import Icon from './Icon';
import plusSVG from '../../static/img/src/plus-solid.svg';

class Weather extends React.Component{

addCity=(event)=>{
    event.preventDefault();
    let city = this.props.weather.cityID;
this.props.addCity(city);
}
deleteCity = (event) =>{
    event.preventDefault();
    let city = this.props.weather.cityID;
this.props.deleteCity(city);
}
 
render(){
    let weather = this.props.weather;
    console.log(weather);
    let weatherDescrSVG = weather.weatherDescprotion.img.map((src, index) => <Icon className='temperature' 
                                                                                    key={index} 
                                                                                    glyph={src.id} 
                                                                                    viewBox={src.viewBox} /> );
    let weatherDescrText = weather.weatherDescprotion.text.map((text, index) => <p key={index}>{text}</p>);
    let btn;
    if(this.props.addCity){btn = <button className='addBtn'
                                         onClick={this.addCity}>
                                    <Icon glyph={plusSVG.id}
                                          viewBox={plusSVG.viewBox} />
                                 </button> } else{
                            btn = <button className='deleteBtn'
                            onClick={this.deleteCity}>
                            -
                             </button>
                                 } 
    return(
        <div className='weather row'>
            {btn}
            <div className="col">
                <h2>{weather.city}, {weather.country}</h2>
                <p>Max temperature: {Math.round(weather.temperature.max)} &#186; C</p>
                <p>Humidity: {weather.humidity} %</p>
                <p>Pressure: {weather.pressure} MP</p>
                <p>Wind: {weather.wind.speed} m/s {weather.windDirection}</p>
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
