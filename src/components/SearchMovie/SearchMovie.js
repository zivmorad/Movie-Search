import React, { Component } from 'react'
import SearchBar from './SearchBar/SearchBar'
import './SearchMovie.css'
import MovieCard from './MovieCard/MovieCard'
import { connect } from 'react-redux'

class SearchMovie extends Component{

    renderMovies=()=>{
        if( this.props.movies.length!==0){
            return this.props.movies.map((movie,index)=>{
                return <div key={index}><MovieCard img={movie.Poster} title={movie.Title} id={movie.imdbID}/></div> 
            })
        }
    }


    render(){
        return(
            <div className='search-movie-container'>
                <SearchBar/>
                <div className='movies-list'>
                    {this.renderMovies()}
                </div>
            </div>
        )}
}

const mapStateToProps=state=>{
    return({
        movies:state.movies
    })
}

export default connect(mapStateToProps)( SearchMovie);