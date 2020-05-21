import React from 'react'
import Navbar from './Navbar/Navbar'
import {BrowserRouter,Route} from 'react-router-dom'
import SearchMovie from './SearchMovie/SearchMovie'
import './App.css'
const App=()=>{
    return(
         <div>
             <BrowserRouter>
                <div>
                    <Navbar/>
                    <Route path='/' exact component={SearchMovie}/>
                    <Route path='/currentVideo' exact component={'#'}/>
                </div>
             </BrowserRouter>
         </div>
    )
}

export default App;