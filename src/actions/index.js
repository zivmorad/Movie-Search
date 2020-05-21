import TMDB from "../api/TMDB"
import {FETCH_MOVIES} from './types'

export const fetchMovies = searchInput => async dispatch=>{
    const res=await TMDB.get('/search/movie',{
        params:{
            api_key:'9d07c6739da38cecbd8f76c867a2dc68',
            query:searchInput
        }
    })
    dispatch({ type:FETCH_MOVIES , payload:res.data.results })
}