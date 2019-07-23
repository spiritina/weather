import React from 'react';
import Icon from './Icon';
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
        this.state = {
            weather: this.props.weather
        };
        this.setWindDirection = this.setWindDirection.bind(this)
        this.setWeatherDescription = this.setWeatherDescription.bind(this);
        this.setTemperatureSVG = this.setTemperatureSVG.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this);
        this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
        
    }
    setWindDirection(props){
        let weather = props.weather;
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
            this.setState({windDirection: windDirection});
    }

    setWeatherDescription(props){
        let weather = props.weather;
        let weatherDescr = [];
        let weatherDescrText = [];
        for(let i=0; i < weather.weather.length; i++){
            if(weather.weather[i].main == "Rain"){
                if(weather.weather[i].description=='heavy intensity shower rain'||weather.weather[i].description=='light intensity shower rain'||weather.weather[i].description=='medium intensity shower rain'){
                    weatherDescr.push(svgRainShower)    
                }
                else{
                    if (weather.timeOfDay == 'day'){
                        weatherDescr.push(svgRain)
                    };
                    if (weather.timeOfDay == 'night'){
                         weatherDescr.push(svgNightRain)
                    };
                }};
            if (weather.weather[i].main == "Clear"&&weather.timeOfDay == 'day'){
                weatherDescr.push(svgSun)
            };
            if (weather.weather[i].main == "Clear"&&weather.timeOfDay == 'night'){
                weatherDescr.push(svgMoon)
            };
            if (weather.weather[i].main == "Clouds"){
                if(weather.weather[i].description=='few clouds'&weather.timeOfDay=='day'){
                    weatherDescr.push(svgCloudSun)
                }else if(weather.weather[i].description=='few clouds'&weather.timeOfDay=='night'){
                    weatherDescr.push(svgCloudMoon)
                }else{
                
                weatherDescr.push(svgCloud)}
            };
            if (weather.weather[i].main == "Mist"){
                weatherDescr.push(svgSmog)
            };
            if(weather.weather[i].description=='Thunderstorm'){
                weatherDescr.push(svgStorm)    
            };
            if(weather.weather[i].description=='Snow'){
                weatherDescr.push(svgSnow)    
            };

            weatherDescrText.push(weather.weather[i].description);
        }
        if (weather.wind.speed > 10){weatherDescr.push(svgWind)}
        this.setState({weatherDescprotion: {
                                            img: weatherDescr,
                                            text: weatherDescrText
        }})
    }
    setTemperatureSVG(props){
        let weather = props.weather;
        let temperatureSVG;
        if (weather.temperature.max < 5) { 
            temperatureSVG = svgTemperatureLow
         }else if (weather.temperature.max < 27){
            temperatureSVG = svgTemperatureMedium
         } else {
            temperatureSVG = svgTemperatureHight
         }
         this.setState({temperatureSVG: temperatureSVG})
    }
    componentWillMount(){  
            this.setWindDirection(this.props);
            this.setWeatherDescription(this.props);
            this.setTemperatureSVG(this.props);
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.weather != this.props.weather) return true; else return false;
        
    }
    componentWillReceiveProps(nextProps){
        this.setState({weather: nextProps.weather});
        this.setWindDirection(nextProps);
        this.setWeatherDescription(nextProps);
        this.setTemperatureSVG(nextProps);
    }
    
    render(){
        let weatherDescrSVG = this.state.weatherDescprotion.img.map((src, index) => <Icon className='temperature' key={index} glyph={src.id} viewBox={src.viewBox} /> );
        let weatherDescrText = this.state.weatherDescprotion.text.map((text, index) => <p key={index}>{text}</p>)
        return(
            <div className='weather row'>
                <div className="col">
                    <h2>{this.state.weather.city}, {this.state.weather.country}</h2>
                    <p>Max temperature: {Math.round(this.state.weather.temperature.max)} &#186; C</p>
                    <p>Humidity: {this.state.weather.humidity} %</p>
                    <p>Pressure: {this.state.weather.pressure} MP</p>
                    <p>Wind: {this.state.weather.wind.speed} m/s {this.state.windDirection}</p>
                    {weatherDescrText}
                </div>
                <div className="col">
                    <div className="row">
                        {weatherDescrSVG}{<Icon className='temperature' glyph={this.state.temperatureSVG.id} viewBox={this.state.temperatureSVG.viewBox} />}
                    </div>
                </div>
            </div>
        )
}
}

export default App;