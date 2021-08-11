import React, { Component } from 'react';

class About extends Component {

    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json
                })
            })
    }

    render(){
        var {isLoaded, items} = this.state;
        if(!isLoaded){
            return (
                <div className="main-content">
            <div className="section">
                <div className="column">
                    <div className="content">
                    <h1>Loading....</h1>
                    </div>
        </div>
        </div>
        </div>
            )
        }else{
            return (
                <div className="main-content">
            <div className="section">
                <div className="column">
                    <div className="content">
                    <h1>About</h1>
                    <ul>
                        {items.map(item => (
                            <li key={item.id}>Email: {item.email} | Name: {item.name}</li>
                        ))}           
                    </ul>
                    </div>
        </div>
        </div>
        </div>
            )
        }
        
    }
}

export default About;
