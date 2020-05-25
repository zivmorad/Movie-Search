import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar=()=>{
    return(
        <div className='nav-container'>
            <Link to='/' className='logo'>Ziv</Link>
            <Link to='/' className='nav-title'>Cinima World</Link>
            <div className='nav-icons-warp'> 
                <i className="fab fa-github fa-2x" onClick={()=>{window.open('https://github.com/zivmorad/movie-search')}}></i>
                <i className="fab fa-linkedin fa-2x" onClick={()=>{window.open('https://www.linkedin.com/in/ziv-morad-216a6a18a/')}}></i>
            </div>
        </div>)
}

export default Navbar;