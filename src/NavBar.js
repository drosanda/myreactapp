import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(){
    
    return (
        <div className="navbar navbar-top">
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/project">Project</Link>
                <Link to="/login">Login</Link>
            </div>
        </div>
    )
}
export default NavBar;
