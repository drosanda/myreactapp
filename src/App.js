import React, { Component } from 'react';
import About from './About';
import Project from './Project';
import Home from './Home';
import { Route, Link } from 'react-router-dom';
import NavBar from './NavBar';

class App extends Component {
    render(){
        return (

            <div className="App">
                <NavBar />
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/project" component={Project} />
            </div>
        )

    }
}

export default App;
