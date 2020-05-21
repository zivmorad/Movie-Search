import {
FETCH_MOVIES
} from '../actions/types'

export default(movies=[],action)=>{
    switch (action.type) {
        case FETCH_MOVIES:
            return [...movies]=[action.payload]
        default:
            return movies
    }
}