class Weather{
    constructor(obj){
        this.city = obj.name;
        this.cityID = obj.id;
        this.country = obj.sys.country;
        this.date = new Date().getTime()/1000;
        this.temperature = {};
        this.temperature.min = obj.main.temp_min - 273.15;
        this.temperature.max = obj.main.temp_max - 273.15;
        this.temperature.average = obj.main.temp - 273.15;
        this.humidity = obj.main.humidity;
        this.pressure = obj.main.pressure;
        this.wind = obj.wind;
        this.weather = obj.weather;
        this.sunset = obj.sys.sunset;
        this.sunrise = obj.sys.sunrise;
        this.getDayTime();
    }
    getDayTime = ()=>{
       if (this.sunrise<this.date&&this.sunset>this.date) 
           {this. isDay = true;} else {this.isDay = false;}
    }
}

export default Weather;