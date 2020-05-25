import React from 'react'
import Navbar from './Navbar/Navbar'
import {BrowserRouter,Route} from 'react-router-dom'
import SearchMovie from './SearchMovie/SearchMovie'
import './App.css'
import CurrentMovie from './CurrentMovie/CurrentMovie'
const App=()=>{
    return(
         <div>
             <BrowserRouter>
                <div>
                    <Navbar/>
                    <Route path='/' exact component={SearchMovie}/>
                    <Route path='/currentVideo' exact component={CurrentMovie}/>
                </div>
             </BrowserRouter>
         </div>
    )
}

export default App;