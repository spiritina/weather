import React from 'react';
import Weather from './Weather';
import Slider from './slider/Slider'



class SavedCities extends React.Component{
    constructor(props){
        super(props)
    }
    shouldComponentUpdate(){
        return true
    } 

    render(){
        let town = this.props.cities, 
        cities = Object.keys(town).map(city => <Weather key={town[city].city}
                                                 weather={town[city].weather}
                                                 deleteCity={this.props.deleteCity} />);
        if (Object.keys(town).length > 2)  { cities = <Slider>{cities}</Slider> }
        return(
            <div className = 'container'>
                {cities}
            </div>
        )
    }
}

export default SavedCities;