import React, { Component } from 'react';
import CardList from './CardList'
import SearchBox from './SearchBox'
import { robots } from './robots'

class App extends Component {
    state = {
        robots: robots,
        searchField: ''
    }

    onSearchChange(event) {
        console.log(event)
    }

    render() {
        return (
            <div>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={this.state.robots}/>
            </div> 
        )
    } 
}

export default App;