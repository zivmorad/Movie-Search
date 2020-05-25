import React, { Component } from 'react'
import './CurrentMovie.css'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import spiner from './spiner.gif'

class CurrentMovie extends Component{

    isEmpty = inputObject => {
        return Object.keys(inputObject).length === 0;
      };

    renderCurrentMovie=()=>{
        if(!this.isEmpty(this.props.movie)){
            return(
                <div className='current-Movie-container'>
                    <h1 className='movie-title'>{this.props.movie.Title}</h1>
                    <div className='img-text-warp'>
                        <img className='movie-img' src={this.props.movie.Poster} alt='error'/>
                        <div className='movie-details'>
                            <p><strong>Released: </strong> {this.props.movie.Released}</p>
                            <p><strong>Genre: </strong> {this.props.movie.Genre}</p>
                            <p><strong>Duration: </strong> {this.props.movie.Runtime}</p>
                            <p><strong>Director: </strong> {this.props.movie.Director}</p>
                            <p><strong>Actors: </strong> {this.props.movie.Actors}</p>
                            <p><strong>Language: </strong> {this.props.movie.Language}</p>
                            <p><strong>imdb Rating: </strong> {this.props.movie.imdbRating}</p>
                            <h4 className='overview-title'>Overview:</h4>
                            <p className='overview-text'>{this.props.movie.Plot}</p>
                            <Link className='back-btn' to='/'>Back to search</Link>
                        </div>
                    </div>  
                </div>
            )
        } else {
            return(
                <div className='spiner-warp'>
                    <img className='spiner' src={spiner} alt='eror'/>
                </div>
            )
        }
    }
    

    render(){
        return(
            <div className='main-container'> 
                {this.renderCurrentMovie()}
            </div>
        )
    }}

const mapStateToProps=state=>{
   
    return{
        movie:state.movie
    }
}


export default connect(mapStateToProps)(CurrentMovie);