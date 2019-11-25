import React, { Component } from 'react';
import Cards from './Cards/Cards';

export default class LeftDeck extends Component {
    constructor(props){
        super(props);
    }
    
    // renders the left deck component.
    render() {
        return (
            <Cards data={this.props.data}/>
        )
    };
}
