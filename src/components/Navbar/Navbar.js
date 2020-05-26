import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from './zivLogo.png'
const Navbar=()=>{
    return(
        <div className='nav-container'>
             <img className='logo'
                src={logo}
                alt='error'/>
            <Link to='/' className='nav-title'>Cinima World</Link>
            <div className='nav-icons-warp'> 
                <i className="fab fa-github fa-2x" onClick={()=>{window.open('https://github.com/zivmorad/movie-search')}}></i>
                <i className="fab fa-linkedin fa-2x" onClick={()=>{window.open('https://www.linkedin.com/in/ziv-morad-216a6a18a/')}}></i>
            </div>
        </div>)
}

export default Navbar;