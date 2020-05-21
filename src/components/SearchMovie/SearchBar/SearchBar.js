import React, { Component } from 'react'
import {Field,reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import {fetchMovies} from '../../../actions'
import './SearchBar.css'


class SearchBar extends Component{
    renderInput=(formProps)=>{
        return(
            <div className='field'>
                    <input onChange={formProps.input.onChange} 
                      value={formProps.input.value} 
                      placeholder='Enter Movie '/>
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

const fromWarp= reduxForm({
    form:'searchMovie',
})(SearchBar);

export default connect(null,{fetchMovies})(fromWarp);