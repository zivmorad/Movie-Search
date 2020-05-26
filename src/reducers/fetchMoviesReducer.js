import {
FETCH_MOVIES
} from '../actions/types'

export default(movies=[],action)=>{
    switch (action.type) {
        case FETCH_MOVIES:
            if(action.payload===undefined){
               return [...movies]='Movie Not Found'
            }else{
                return [...movies]=action.payload
            }
        default:
            return movies
    }
}