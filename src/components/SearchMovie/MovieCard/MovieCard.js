import React, { Component } from 'react'
import './MovieCard.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchMovie} from '../../../actions'

class MovieCard extends Component{

    fetchMovieById=()=>{
        this.props.fetchMovie(this.props.id)
    }

    render(){
        return(
            <div className='card-movie-container'>
                <img className='card-movie-img' src={this.props.img} alt='error'/>
                <h5 className='card-movie-title'>{this.props.title}</h5>
                <Link to='/currentVideo' className='movie-detail-btn' onClick={this.fetchMovieById}>View details</Link>
            </div>
        )

    }
}



export default connect(null,{fetchMovie}) (MovieCard);