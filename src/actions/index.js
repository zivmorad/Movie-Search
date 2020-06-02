import axios from 'axios'
import {FETCH_MOVIES,FETCH_MOVIE_BY_ID} from './types'
import {apiKey} from '../confing/apiKey'
export const fetchMovies = searchInput => async dispatch=>{
    const res=await axios.get(`http://www.omdbapi.com?apikey=${apiKey}&s=${searchInput}`)
    dispatch({ type:FETCH_MOVIES , payload:res.data.Search })
}

export const fetchMovie=movieId=> async dispatch=>{
    const res=await axios.get(`http://www.omdbapi.com?apikey=${apiKey}&i=${movieId}`)
    dispatch({ type:FETCH_MOVIE_BY_ID , payload:res.data })
}
