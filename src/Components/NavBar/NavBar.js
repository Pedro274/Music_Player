import React from 'react'
import './NavBar.scss';
import {NavLink} from 'react-router-dom';

function NavBar() {
    return (
        <div className='navBarContainer'>
            <div className='links_container'>
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/Contact">Contact</NavLink>
            </div>
        </div>
    )
}

export default NavBar
