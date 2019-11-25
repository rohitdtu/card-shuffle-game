import React, { Component } from "react";
// import Card from "../../../../functional-components/Card/Card";
import Card from "../../Card/Card";
import "../leftDeck.module.css";

export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      duplicatedData: [],
      randomizedData: [],
      finalizedData: [],
      openedData: []
    };
    this.start();
  }

  // creates an array of flipped cards when a card is clicked
  handleClick(number, index) {
    if (this.state.openedData.length == 2) {
      this.check();
    } else {
      let data = {
        number,
        index
      };
      let finalizedData = this.state.finalizedData;
      let openedData = this.state.openedData;

      finalizedData[index].close = false;
      openedData.push(data);

      this.setState({
        openedData: openedData,
        finalizedData: finalizedData
      });

      if (this.state.openedData.length == 2) {
        setTimeout(() => {
          this.check();
        }, 750);
      }
    }
  }

  // checks if 2 flipped cards have the same value
  check() {
    let finalizedData = this.state.finalizedData;
    if (
      this.state.openedData[0].number == this.state.openedData[1].number &&
      this.state.openedData[0].index != this.state.openedData[1].index
    ) {
      finalizedData[this.state.openedData[0].index].complete = true;
      finalizedData[this.state.openedData[1].index].complete = true;
    } else {
      finalizedData[this.state.openedData[0].index].close = true;
      finalizedData[this.state.openedData[1].index].close = true;
    }
    this.setState({
      finalizedData,
      openedData: []
    });
  }

  // creates an array of closed cards(not flipped).
  start() {
    let finalizedData = [];
    this.state.duplicatedData = this.props.data;
    this.state.randomizedData = this.shuffle(this.state.duplicatedData);
    this.state.randomizedData.map((data, index) => {
      finalizedData.push({
        number: data.number,
        deck: data.deck,
        close: true,
        complete: false
      });
    });
    this.state.finalizedData = finalizedData;
  }

  // shuffles the card array at the begining of the game.
  shuffle(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  // renders the cards of left deck
  render() {
    return (
      <div className="col-lg-6">
        <div className="col-lg-12">DECK A</div>
        <div className="LeftDeck col-lg-12">
          {this.state.finalizedData.map((data, index) => {
            return (
              <Card
                key={index}
                data={data}
                click={() => this.handleClick(data.number, index)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
