import React from 'react'
import Navbar from './Navbar/Navbar'
import {BrowserRouter,Route} from 'react-router-dom'

const App=()=>{
    return(
         <div>
             <BrowserRouter>
                <div>
                    <Navbar/>
                    <Route path='/' exact={'#'}/>
                    <Route path='/currentVideo' exact={'#'}/>
                </div>
             </BrowserRouter>
         </div>
    )
}

export default App;