import React, { Component } from 'react';
import Cards from './Cards/Cards';

export default class RightDeck extends Component {
    constructor(props){
        super(props);
    }
    // renders the right deck component.
    render() {
        return (
            <Cards data={this.props.data}/>
        )
    };
}
