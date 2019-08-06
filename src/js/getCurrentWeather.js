import getCurrentWeather from './API';
import {setTemperatureSVG, setWeatherDescription, setWindDirection} from './components/weatherDesctiptios'

const getCurrentWeatherInTheCity = (city, code, svgs)=>{
    return new Promise(function(resolve, reject) {
    getCurrentWeather(city, code)
    .then(result => {   
        result = setTemperatureSVG(result, svgs);
        result = setWeatherDescription(result, svgs);
        result = setWindDirection(result, svgs);
        resolve(result)
    },
    error => {
            error = {               
                error: true
            }
            reject(error);
        }
        
    );

})
}
export default getCurrentWeatherInTheCity;