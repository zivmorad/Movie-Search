import React, { Component } from 'react'
import SearchBar from './SearchBar/SearchBar'
import './SearchMovie.css'
import MovieCard from './MovieCard/MovieCard'
import { connect } from 'react-redux'

class SearchMovie extends Component{

    renderMovies=()=>{
        if( this.props.movies[0]!==undefined){
            return this.props.movies[0].map((movie,index)=>{
                return <div key={index}><MovieCard img={movie.backdrop_path} title={movie.title} id={movie.id}/></div> 
            })
        }else{
            return <div>empty</div>
        }
    }


    render(){
        console.log(this.props.movies[0])
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