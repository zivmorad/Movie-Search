import {FETCH_MOVIE_BY_ID} from '../actions/types'

export default(movie={},action)=>{
    movie={}
    switch (action.type) {
        case FETCH_MOVIE_BY_ID:
            return {...movie}=action.payload;
        default:
            return movie;
    }
}