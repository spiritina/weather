import {useEffect, useState} from 'react';
import getCurrentWeatherInTheCity from '../getCurrentWeather';


 const useURL = (city, code, svgs) => { 
    const [state, setWeather] = useState({weather: null, loading: true, error: false});
    useEffect(()=>
      { setWeather(state => ({weather: state.weather, loading: true, error: false}));
        getCurrentWeatherInTheCity(city, code, svgs)
        .then(result => setWeather({weather: result, loading: false, error: false})
        ,
        error => setWeather({weather: '', loading: false, error: true})
        )
    }
,[city, code, svgs]);

return state
}

export default useURL