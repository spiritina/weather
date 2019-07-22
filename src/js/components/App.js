import React from 'react';
import svgTemperatureLow from '../../static/img/src/thermometer-quarter-solid.svg';
import svgTemperatureMedium from '../../static/img/src/thermometer-half-solid.svg';
import svgTemperatureHight from '../../static/img/src/thermometer-full-solid.svg';
import svgRain from '../../static/img/src/cloud-rain-solid.svg';
import svgRainShower from '../../static/img/src/cloud-showers-heavy-solid.svg';
import svgNightRain from '../../static/img/src/cloud-rain-solid.svg';
import svgWind from '../../static/img/src/wind-solid.svg';
import svgSun from '../../static/img/src/sun-solid.svg';
import svgMoon from '../../static/img/src/moon-solid.svg';
import svgCloud from '../../static/img/src/cloud-solid.svg';
import svgCloudSun from '../../static/img/src/cloud-sun-solid.svg';
import svgCloudMoon from '../../static/img/src/cloud-moon-solid.svg';
import svgSmog from '../../static/img/src/smog-solid.svg';
import svgStorm from '../../static/img/src/poo-storm-solid.svg';
import svgSnow from '../../static/img/src/snowflake-regular.svg';
class App extends React.Component{
    constructor(props){
        super(props)
        
    }
    
    render(){
        let weather = this.props.weather;
        console.log(weather.weather.length);
        let weatherDescr = [];
        let weatherDescrText = [];
        for(let i=0; i < weather.weather.length; i++){
            console.log(weather.weather)
            if(weather.weather[i].main == "Rain"){
                if(weather.weather[i].description=='heavy intensity shower rain'||weather.weather[i].description=='light intensity shower rain'||weather.weather[i].description=='medium intensity shower rain'){
                    weatherDescr.push(<img className='temperature' key={i} src={svgRainShower} />)    
                }
                else{
                    if (weather.timeOfDay == 'day'){
                        weatherDescr.push(<img className='temperature' key={i} src={svgRain} />)
                    };
                    if (weather.timeOfDay == 'night'){
                         weatherDescr.push(<img className='temperature' key={i} src={svgNightRain} />)
                    };
                }};
            if (weather.weather[i].main == "Clear"&&weather.timeOfDay == 'day'){
                weatherDescr.push(<img className='temperature' key={i} src={svgSun} />)
            };
            if (weather.weather[i].main == "Clear"&&weather.timeOfDay == 'night'){
                weatherDescr.push(<img className='temperature' key={i} src={svgMoon} />)
            };
            if (weather.weather[i].main == "Clouds"){
                if(weather.weather[i].description=='few clouds'&weather.timeOfDay=='day'){
                    weatherDescr.push(<img className='temperature' key={i} src={svgCloudSun} />)
                }else if(weather.weather[i].description=='few clouds'&weather.timeOfDay=='night'){
                    weatherDescr.push(<img className='temperature' key={i} src={svgCloudMoon} />)
                }else{
                
                weatherDescr.push(<img className='temperature' key={i} src={svgCloud} />)}
            };
            if (weather.weather[i].main == "Mist"){
                weatherDescr.push(<img className='temperature' key={i} src={svgSmog} />)
            };
            if(weather.weather[i].description=='Thunderstorm'){
                weatherDescr.push(<img className='temperature' key={i} src={svgStorm} />)    
            };
            if(weather.weather[i].description=='Snow'){
                weatherDescr.push(<img className='temperature' key={i} src={svgSnow} />)    
            };

            weatherDescrText.push(<p key={i}>{weather.weather[i].description}</p>);
        }
        console.log(weatherDescr)
        let temperatureSVG;
        if (weather.temperature.max < 5) { 
            temperatureSVG = svgTemperatureLow
         }else if (weather.temperature.max < 27){
            temperatureSVG = svgTemperatureMedium
         } else {
            temperatureSVG = svgTemperatureHight
         }

         let windDirectionDeg = weather.wind.direction;
         let windDirection;
         if (windDirectionDeg<20&&windDirectionDeg>340){
             windDirection = 'East'
            } else if (windDirectionDeg<70){
                windDirection = 'North-East'
            } else  if (windDirectionDeg<110) {
                windDirection = 'North'
            }else  if (windDirectionDeg<165) {
                windDirection = 'North-West'
            }else  if (windDirectionDeg<200) {
                windDirection = 'West'
            }else  if (windDirectionDeg<245) {
                windDirection = 'South-West'
            }else  if (windDirectionDeg<300) {
                windDirection = 'South'
            }else  if (windDirectionDeg<=340) {
                windDirection = 'South-East'
            }else if (windDirection==undefined){
                windDirection = ''
            }
            
            if (weather.wind.speed > 10){ <img className='temperature' key={weather.weather.length} src={svgWind} /> }
        return(
            <div className='weather row'>
                <div className="col">
                    <h2>{weather.city}, {weather.country}</h2>
                    <p>Max temperature: {Math.round(weather.temperature.max)} &#186; C</p>
                    <p>Humidity: {weather.humidity} %</p>
                    <p>Pressure: {weather.pressure} MP</p>
                    <p>Wind: {weather.wind.speed} m/s {windDirection}</p>
                    {weatherDescrText}
                </div>
                <div className="col">
                    <div className="row">
                        {weatherDescr}{<img className='temperature' src={temperatureSVG} />}
                    </div>
                </div>
            </div>
        )
    }
}

export default App;