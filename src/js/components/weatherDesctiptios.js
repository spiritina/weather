const setWindDirection = (weather) => {
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

const setWeatherDescription = (weather, svgs)=>{
   let weatherDescr = [];
   let weatherDescrText = [];
   for(let i=0; i < weather.weather.length; i++){
       if(weather.weather[i].main == "Rain"){
           if(weather.weather[i].description=='heavy intensity shower rain'||weather.weather[i].description=='light intensity shower rain'||weather.weather[i].description=='medium intensity shower rain'){
               weatherDescr.push(svgs.svgRainShower)    
           }
           else{
               weather.isDay? weatherDescr.push(svgs.svgRain) : weatherDescr.push(svgs.svgNightRain)
               };
           };
       if(weather.weather[i].main == "Clear"){
           weather.isDay? weatherDescr.push(svgs.svgSun) : weatherDescr.push(svgs.svgMoon);
       }
       if (weather.weather[i].main == "Clouds"){
           if (weather.weather[i].description=='few clouds'){
               weather.isDay?weatherDescr.push(svgs.svgCloudSun) : weatherDescr.push(svgs.svgCloudMoon)
           }else{
           weatherDescr.push(svgs.svgCloud)}};
      if(weather.weather[i].main == "Mist"){weatherDescr.push(svgs.svgSmog)};
      if(weather.weather[i].main=='Thunderstorm'){ weatherDescr.push(svgs.svgStorm)};
      if(weather.weather[i].main=='Snow'){weatherDescr.push(svgs.svgSnow)};

       weatherDescrText.push(weather.weather[i].description);
   }
   if (weather.wind.speed > 10){weatherDescr.push(svgs.svgWind)};
   weather.weatherDescprotion = {
                                       img: weatherDescr,
                                       text: weatherDescrText
   }
   return weather;
}
const setTemperatureSVG = (weather, svgs) =>{
   let temperatureSVG;
   if (weather.temperature.max < 5) { 
       temperatureSVG = svgs.svgTemperatureLow
    }else if (weather.temperature.max < 27){
       temperatureSVG = svgs.svgTemperatureMedium
    } else {
       temperatureSVG = svgs.svgTemperatureHight
    }
    weather.temperatureSVG = temperatureSVG;
    return weather
   }
export {setTemperatureSVG, setWeatherDescription, setWindDirection};