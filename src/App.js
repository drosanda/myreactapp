import React, { Component, useState } from 'react';
import About from './About';
import Project from './Project';
import Home from './Home';
import { Route, Link } from 'react-router-dom';
import NavBar from './NavBar';
import Login from './Login';
import NavBarBottom from './NavBarBottom';

class App extends Component {



    render(){
        
        return (

            <div className="App">
                <NavBar />
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/about" component={About} />
                <Route exact path="/project" component={Project} />
                <NavBarBottom />
            </div>
        )

    }
}

export default App;
