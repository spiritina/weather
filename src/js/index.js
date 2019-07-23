import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import axios from 'axios';
import Weather from './classes/Weather'
import svgSearch from '../static/img/src/search-solid.svg';
import MyError from './components/MyError';
let cityInput = document.getElementById('cityInput');
window.onload=()=>{
    function setBackground(){cityInput.style.backgroundImage = `url(${svgSearch})`;}
    setBackground();
    cityInput.addEventListener('blur', setBackground);
    cityInput.addEventListener('focus', ()=>{cityInput.style.backgroundImage = ''});
}
cityInput.addEventListener('keyup', (e)=>  {
    e.preventDefault();
    if(e.keyCode ==13){
    getCurentWeather(cityInput.value, drawnWeather);}

});

async function getCurentWeather(cityName, callback) {
    try {
        const {data} = await axios.get(` http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=65b4c9f78870446e7ee15f931cad03ce`);
        let NewWeather =  new Weather(data);
        callback(NewWeather);
    } catch (error) {
        ReactDOM.render(<MyError myerror = {error}/>, document.getElementById('root'));
    }
}

function drawnWeather(data){
ReactDOM.render(<App weather = {data}/>, document.getElementById('root'));
}