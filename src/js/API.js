import axios from 'axios';
import Weather from'./classes/Weather';

async function getCurentWeather(cityName, key) {
        cityName = cityName.toString();
        const {data} = await axios.get(` http://api.openweathermap.org/data/2.5/weather?${key}=${cityName}&APPID=b4e7aa445f0d3c6b71b8fcbde075314b`);
        let NewWeather =  new Weather(data);
        return NewWeather;
}

export default getCurentWeather;