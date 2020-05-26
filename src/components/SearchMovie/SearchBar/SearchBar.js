import React, { Component } from 'react'
import {Field,reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import {fetchMovies,fetchMovie} from '../../../actions'
import './SearchBar.css'


class SearchBar extends Component{
    renderError=({error,touched})=>{
        if(error&&touched){
            return <span>{error}</span>
        }
    }

    renderInput=(formProps)=>{
        return(
            <div className='field'>
                    <input onChange={formProps.input.onChange} 
                      value={formProps.input.value} 
                      placeholder='Enter Movie '/>
                      {this.renderError(formProps.meta)}
            </div>
        ) 
    }
    onSubmit=(formValues)=>{
        this.props.fetchMovies(formValues.movieName);
    }
    render(){
        return(
            <form className='form-container' onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name='movieName' component={this.renderInput}/>
                <button className='search-btn'><i className="search-icon fas fa-search"></i>Search</button>
            </form>       
    )}
}

const validate=formValues=>{
    const error={};

    if(!formValues.movieName){
        error.movieName='You Must Enter Movie'
    }
    return error;
    
    
}

const fromWarp= reduxForm({
    form:'searchMovie',
    validate:validate
})(SearchBar);

export default connect(null,{fetchMovies,fetchMovie})(fromWarp);