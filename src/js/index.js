import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore} from 'redux';
import weatherReducers from './components/reducers/weather';
import {connect, Provider} from 'react-redux';
import PropTypes from 'prop-types';

let store = createStore(weatherReducers);
let newCity = '';
if(localStorage.getItem('weathermain')){
    newCity = JSON.parse(localStorage.getItem('weathermain'));
   
};
store.dispatch({type: 'NEW_CITY_MAIN',
city: newCity});

let savedCities = [];

if(localStorage.getItem('savedCities')){
    savedCities = JSON.parse(JSON.parse(localStorage.getItem('savedCities')));  
    console.log(savedCities) 
}
store.dispatch({
    type: 'ADD_SAVED_CITIES',
    savedCities: savedCities
});

Provider.childrenPropTypes={
    store: PropTypes.object
}

ReactDOM.render(
<Provider store={store} >
    <App />
</Provider>, document.getElementById('root'));