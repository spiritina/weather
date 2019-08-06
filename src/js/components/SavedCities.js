import React from 'react';
import Weather from './Weather';
import Slider from './slider/Slider'
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux'


class SavedCities extends React.Component{
    constructor(props){
        super(props)
        this.state = {cities: this.props.cities};
    }
    
    componentWillReceiveProps(newProps){
        if(newProps.cities !== this.state.cities){
            this.setState({cities: newProps.cities});
            localStorage.setItem('savedCities', JSON.stringify(JSON.stringify(newProps.cities)));
        }
    }

    componentDidMount(){
    if(this.state.cities !== this.props.cities){
        this.setState({cities: this.props.cities});
        }
    }
    shouldComponentUpdate(nextProps, nextState){
        return true
    }

    render(){
      
        let town = this.state.cities;
        let cities = town.map(city =><Weather key={city}
                                                 city={city}
                                                 code='q'
        removeCity={this.props.removeCity} />);
        if (town.length > 2)  { cities = <Slider>{cities}</Slider> }
        return(
            <div className = 'container'>
                {cities}
            </div>)
    }
}
const mapStateToProps = (state) => ({
    cities: state.savedCities,
    numberOfCities: state.savedCities.length
})

const removeCity = city => ({   type: 'DELETE_THE_CITY_FROM_SAVED', 
                                city: city})
const mapDispatchToProps = (dispatch, ownProps) =>  {
   return bindActionCreators({ removeCity }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SavedCities);