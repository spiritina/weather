import React, {useState, useEffect} from 'react';
import Icon from './Icon';
import MyError from './MyError';
import plusSVG from '../../static/img/src/plus-solid.svg';
import useURL from './useURL';
import svgs from '../maps/svgs';

const Weather = (props) => {
    let weatherDescrSVG = null, weatherDescrText = null;
const {weather, loading, error} = useURL(props.city, props.code, svgs);
useEffect( () =>{
    let timer = setInterval(() =>
        {
           console.log(weather, loading, error);
          // {weather, loading, error} = useURL(props.city, props.code, svgs);
        }, 10000
    );
    return ()=>{ 
        clearInterval(timer);
     }
}, 
)

if(!loading&&!error){
    weatherDescrSVG = weather.weatherDescprotion.img.map((src, index) => 
    <Icon   className='temperature' 
            key={index} 
            glyph={src.id} 
            viewBox={src.viewBox} /> );
    weatherDescrText = weather.weatherDescprotion.text.map((text, index) => 
                    <p key={index}>{text}</p>);
}
    let btn;
    if(props.addCity){
        btn =   <button className='addBtn'
                        onClick={props.addCity}>
                    <Icon   glyph={plusSVG.id}
                            viewBox={plusSVG.viewBox} />
                </button> 
    } else{
        btn =   <button className='deleteBtn'
                        onClick={()=>{props.removeCity(props.city)}}>
                            -
                </button>
            }             
    return(
        <div className='weather row'>
            {btn}
            {error&&<MyError />}
            {loading&&
                'loading'
            }
            {!error&&!loading&&
            <div className="col">
                <h2>{weather.city}, {weather.country}</h2>
                <div className="row ">
                    {weatherDescrSVG}{<Icon className='temperature' 
                                            glyph={weather.temperatureSVG.id} 
                                            viewBox={weather.temperatureSVG.viewBox} />}
                </div>
                <p>Max temperature: {Math.round(weather.temperature.max)} &#186; C</p>
                <p>Humidity: {weather.humidity} %</p>
                <p>Pressure: {weather.pressure} MP</p>
                <p>Wind: {weather.wind.speed} m/s {weather.windDirection}</p>
                {weatherDescrText}
            </div>}
          
        </div>
        )
}

export default Weather;
