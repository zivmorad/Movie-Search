import React from 'react'
import './Navbar.css'
const Navbar=()=>{
    return(
        <div className='nav-container'>
            <h3 className='logo'>Ziv</h3>
            <h1 className='nav-title'>Cinima World</h1>
            <div className='nav-icons-warp'>
                <i class="fab fa-github fa-2x"></i>
                <i class="fab fa-linkedin fa-2x"></i>
            </div>
        </div>)
}

export default Navbar;