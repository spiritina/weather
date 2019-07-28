import React from 'react';
import Weather from './Weather';
import Slider from 'react-animated-slider';
import css from 'react-animated-slider/build/horizontal.css';

class SavedCities extends React.Component{

    render(){
        let town = this.props.cities;
        let cities = Object.keys(this.props.cities).map(city => <Weather key={city} 
                                                                         weather={town[city].weather}
                                                                         deleteCity={this.props.deleteCity} />);
        if (cities.length>=3){let slider = <Slider className="slider-wrapper">
			                                {cities}
		                                    </Slider>
        }
        return(
            <div className = 'container'>
                {slider? slider : cities}
            </div>
        )
    }
}

export default SavedCities;