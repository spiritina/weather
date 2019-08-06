
const weatherReducers = (state = {}, action) => {
    switch(action.type){
    case 'NEW_CITY_MAIN':
        return {...state,
                city: action.city,
                }
    case 'ADD_NEW_CITY_TO_SAVED':
        return {...state,
                savedCities: [
                ...state.savedCities, action.city
                ]}
    case 'ADD_SAVED_CITIES':
        return {...state,
                savedCities: action.savedCities
                }
    case 'DELETE_THE_CITY_FROM_SAVED':
        console.log(state.savedCities.slice(0, state.savedCities.indexOf(action.city)));
        console.log( state.savedCities.slice(state.savedCities.indexOf(action.city)+1) );
        console.log(state.savedCities);
        return {...state,
            savedCities: [
            ...state.savedCities.slice(0, state.savedCities.indexOf(action.city)),
            ...state.savedCities.slice(state.savedCities.indexOf(action.city)+1) 
            ]}
    default: 
        return state
    }
}

export default weatherReducers