import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import axios from 'axios';
import Weather from './classes/Weather'
let cityInput = document.getElementById('cityInput');

cityInput.addEventListener('keyup', (e)=>  {
    e.preventDefault();
    if(e.keyCode ==13){
    getCurentWeather(cityInput.value, drawnWeather);}

});

async function getCurentWeather(cityName, callback) {
    try {
        const {data} = await axios.get(` http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=65b4c9f78870446e7ee15f931cad03ce`);
        let NewWeather =  new Weather(data);
        console.log(NewWeather);
        callback(NewWeather);
    } catch (error) {
        if (error.code = 500) console.dir(error)
    }
}

function drawnWeather(data){
ReactDOM.render(<App weather = {data}/>, document.getElementById('root'));
}