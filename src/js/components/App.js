import React from 'react';
import Weather from './Weather';
import Header from './Header';
import MyError from './MyError';
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
import getCurrentWeather from '../API';
import CurentCities from './SavedCities';

class App extends React.Component{
    constructor(props){
        super(props)
        let newCity = '', savedCities=[], curentWeatherInSavedCities=[];
        if(localStorage.getItem('weathermain')){
            newCity = JSON.parse(localStorage.getItem('weathermain'));
        };
        if(localStorage.getItem('savedCities')){
            savedCities = JSON.parse(JSON.parse(localStorage.getItem('savedCities')));
            console.log(savedCities);
            let savedCity = {}, str;
            for (let i=0; i<savedCities.length; i++){
               
                savedCity = {
                    city: savedCities[i],
                    weather:''
                };
                this.onSubmit(savedCity, savedCities[i],'id' );
            }

        }
        this.state = {
            main:{
                weather: '',
                city: newCity.city,
                error: false
            },
            savedCities: savedCities,
            curentWeatherInSavedCities: {}
        }
        if (this.state.main.city){
            this.onSubmit(this.state.main, 'main', 'q');
        }
    }
    addCity= (city) =>{
        let cities = this.state.savedCities;
        if(cities.indexOf(city)===-1){
            cities.push(city);
            this.setState({'savedCities': cities});
            this.onSubmit({city: city}, city,'id' );
            this.saveItem('savedCities', JSON.stringify(cities));
        }
    }
    setWindDirection(weather){
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
            weather.windDirection = windDirection;
            return weather;
    }

    setWeatherDescription(weather){
        let weatherDescr = [];
        let weatherDescrText = [];
        for(let i=0; i < weather.weather.length; i++){
            if(weather.weather[i].main == "Rain"){
                if(weather.weather[i].description=='heavy intensity shower rain'||weather.weather[i].description=='light intensity shower rain'||weather.weather[i].description=='medium intensity shower rain'){
                    weatherDescr.push(svgRainShower)    
                }
                else{
                    weather.isDay? weatherDescr.push(svgRain) : weatherDescr.push(svgNightRain)
                    };
                };
            if(weather.weather[i].main == "Clear"){
                weather.isDay? weatherDescr.push(svgSun) : weatherDescr.push(svgMoon);
            }
            if (weather.weather[i].main == "Clouds"){
                if (weather.weather[i].description=='few clouds'){
                    weather.isDay?weatherDescr.push(svgCloudSun) : weatherDescr.push(svgCloudMoon)
                }else{
                weatherDescr.push(svgCloud)}};
           if(weather.weather[i].main == "Mist"){weatherDescr.push(svgSmog)};
           if(weather.weather[i].main=='Thunderstorm'){ weatherDescr.push(svgStorm)};
           if(weather.weather[i].main=='Snow'){weatherDescr.push(svgSnow)};

            weatherDescrText.push(weather.weather[i].description);
        }
        if (weather.wind.speed > 10){weatherDescr.push(svgWind)};
        weather.weatherDescprotion = {
                                            img: weatherDescr,
                                            text: weatherDescrText
        }
        return weather;
    }
    setTemperatureSVG(weather){
        let temperatureSVG;
        if (weather.temperature.max < 5) { 
            temperatureSVG = svgTemperatureLow
         }else if (weather.temperature.max < 27){
            temperatureSVG = svgTemperatureMedium
         } else {
            temperatureSVG = svgTemperatureHight
         }
         weather.temperatureSVG = temperatureSVG;
         return weather
        }
    saveItem = (key, item)=>{
        localStorage.setItem(key, JSON.stringify(item));
    }
        

    onSubmit = (obj, key, code) => {
        getCurrentWeather(obj.city, code)
        .then(result => {   
            result = this.setTemperatureSVG(result);
            result = this.setWeatherDescription(result);
            result = this.setWindDirection(result);
            obj.weather = result;
            obj.error = false;
            if (key==='main'){
            this.setState({[key]: {...obj, 
                                   city:'' },
                            });
            this.saveItem(`weather${key}`, obj);} else {
                let newCurrentWeather = this.state.curentWeatherInSavedCities;
                newCurrentWeather[key] = obj;
                this.setState({curentWeatherInSavedCities: newCurrentWeather});
            }
        },
        error => {
                obj = {
                    city: '',
                    weather:'',
                    error:true
                }
                if(key==='main'){
                this.setState({[key]: obj});
                } else return obj;
            }
            
        );
    }
   
    onChange = (event) =>{
        let obj=this.state.main;
        obj.city = event.target.value;
        this.setState({'main':obj});
    }
    deleteCity = (i) => {
        let savedCities = this.state.savedCities;
        savedCities.splice(savedCities.indexOf(i),1);
        this.setState({savedCities: savedCities});
        this.saveItem('savedCities', JSON.stringify(savedCities));
        let curentCities = this.state.curentWeatherInSavedCities;
        delete curentCities[i];

    }

    render(){
        let weatherComponent=null, curentCities=null;
        if (this.state.curentWeatherInSavedCities){
            curentCities = <SavedCities cities = {this.state.curentWeatherInSavedCities} 
                                         deleteCity={this.deleteCity}/>
        }
        if (this.state.main.weather){ weatherComponent = <Weather weather={this.state.main.weather}
                                                                  addCity={this.addCity} />                                                         
    } else if(this.state.main.error){ weatherComponent = <MyError error={this.state.main.error} /> } else{ weatherComponent = null};
        return(
        <div> 
            <Header city={this.state.main} onChange={this.onChange} onSubmit={this.onSubmit}/>
            {weatherComponent}
            {curentCities}
       </div>
        )
}
}

export default App;