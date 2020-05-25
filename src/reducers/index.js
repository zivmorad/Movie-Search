import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import fetchMoviesReducer from './fetchMoviesReducer'
import fetchMovieById from './fetchMovieById'

export default combineReducers({
    form: formReducer,
    movies: fetchMoviesReducer,
    movie:fetchMovieById
})