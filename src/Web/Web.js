import React from 'react'
import NavBar from '../Components/NavBar/NavBar';
import {Switch, Route} from 'react-router-dom';
import Home from '../View/Home/Home';
import Contact from '../View/Contact/Contact';


function Web() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path='/Contact' component={Contact} />
                <Route path='/' component={Home} />
            </Switch>
        </div>
    )
}

export default Web
