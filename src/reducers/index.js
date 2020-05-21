import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import fetchMoviesReducer from './fetchMoviesReducer'

export default combineReducers({
    form: formReducer,
    movies: fetchMoviesReducer
})