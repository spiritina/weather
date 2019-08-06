import React from 'react';
import Weather from './Weather';
import Header from './Header';
import SavedCities from './SavedCities';
import { connect} from 'react-redux';
import {PropTypes} from 'prop-types'
import { bindActionCreators } from 'redux'



class App extends React.Component{
    constructor(props){
        super(props)
        this.state = this.props.mystate;
    }
    addCity= (city) =>{
        console.log(this.state.city)
        let cities = Object.assign(this.state.savedCities);
        if(cities.indexOf(this.state.city)===-1){
            this.props.addCity(this.state.city);
            cities.push(this.state.city)
            this.saveItem('savedCities', JSON.stringify(cities));
        }
    }
    saveItem = (key, item)=>{
        localStorage.setItem(key, JSON.stringify(item));
    }
        
    shouldComponentUpdate(nextProps, nextState){
        return this.state!==nextState;
    }
  
    componentWillReceiveProps(newProps){
        this.setState(newProps.mystate)
    }

    render(){
        let weatherComponent=null, curentCities=null;
        if (this.state.savedCities){
            curentCities = <SavedCities />
        }
        if (this.state.city){console.log(this.state.city);
             weatherComponent = <Weather city = {this.state.city}
                                        code = 'q'
                                        addCity = {this.addCity} />                                                         
    } 
        return(
        <div> 
            <Header />
            {weatherComponent}
            {curentCities}
       </div>
        )
}
}


const mapStateToProps = (state) => ({
    mystate: state
})
App.propTypes = {
    mystate: PropTypes.object.isRequired
}


const onChange = city => ({   type: 'NEW_CITY_MAIN', 
                                city: city})

const addCity = city => ({   type: 'ADD_NEW_CITY_TO_SAVED', 
                            city: city})
const mapDispatchToProps = (dispatch, ownProps) =>  {
   return bindActionCreators({onChange, addCity}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps, null)(App);