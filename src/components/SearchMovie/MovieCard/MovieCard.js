import React from 'react'
import './MovieCard.css'
import { Link } from 'react-router-dom';

const MovieCard=(props)=>{
    return(
        <div className='card-movie-container'>
            <img className='card-movie-img' src={`https://image.tmdb.org/t/p/w185${props.img}`} alt='error'/>
            <h5 className='card-movie-title'>{props.title}</h5>
            <Link to='/currentVideo' className='movie-detail-btn'>View details</Link>
        </div>
    )
}

export default MovieCard;