const store = (state = {}, action) => {
    switch(action.type){
    case 'NEW_CITY_MAIN':
        return {...state,
                main: {
                    city: action.main.city,
                    ...state.main
                }
                }
    case 'NEW_MAIN_WEATHER':
        return {...state,
            main: {
                city: action.main.city,
                ...state.main
            }
            }
    case 'ADD_NEW_CITY_TO_SAVED':
        return {...state,
                savedCities: [
                    ...state.savedCities, action.savedCities
                ]}
    case 'DELETE_THE_CITY_FROM_SAVED':

        return
    case 'GET_WEATHER_FOR_SAVED_CITY':
        let newCurrent = action.curentWeatherInSavedCities
            return {...state,
                curentWeatherInSavedCities: {
                    ...state.curentWeatherInSavedCities, 
                   newCurrent 
                }}
    default: 
        return state
    }
}

export default store