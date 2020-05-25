import axios from 'axios'
import {FETCH_MOVIES,FETCH_MOVIE_BY_ID} from './types'

export const fetchMovies = searchInput => async dispatch=>{
    const res=await axios.get(`http://www.omdbapi.com?apikey=3c84f7ac&s=${searchInput}`)
    dispatch({ type:FETCH_MOVIES , payload:res.data.Search })
}

export const fetchMovie=movieId=> async dispatch=>{
    const res=await axios.get(`http://www.omdbapi.com?apikey=3c84f7ac&i=${movieId}`)
    dispatch({ type:FETCH_MOVIE_BY_ID , payload:res.data })
}
