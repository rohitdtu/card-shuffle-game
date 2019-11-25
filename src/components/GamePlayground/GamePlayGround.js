import React, { Component } from "react";
import LeftDeck from "./LeftDeck/leftDeck";
import RightDeck from "./RightDeck/rightDeck";
import axios from "axios";

class GamePlayground extends Component {
  constructor(props) {
    super();
    this.state = {
      leftDeckData: [
        { number: 1, id: "1", deck: "A" },
        { number: 2, id: "2", deck: "A" },
        { number: 3, id: "3", deck: "A" },
        { number: 4, id: "4", deck: "A" },
        { number: 5, id: "5", deck: "A" },
        { number: 6, id: "6", deck: "A" },
        { number: 7, id: "7", deck: "A" },
        { number: 8, id: "8", deck: "A" },
        { number: 9, id: "9", deck: "A" }
      ],
      rightDeckData: [
        { number: 1, id: "1", deck: "B" },
        { number: 2, id: "2", deck: "B" },
        { number: 3, id: "3", deck: "B" },
        { number: 4, id: "4", deck: "B" },
        { number: 5, id: "5", deck: "B" },
        { number: 6, id: "6", deck: "B" },
        { number: 7, id: "7", deck: "B" },
        { number: 8, id: "8", deck: "B" },
        { number: 9, id: "9", deck: "B" }
      ]
    };
      
  }

  getDeckData() {
    return axios.get(`https://deckofcardsapi.com/api/deck/new/`);
  }

  // get the data of left and right deck
  componentDidMount() {
    axios
      .all([this.getDeckData(), this.getDeckData()])
      .then(
        axios.spread((leftresponse, rightresponse) => {
          const leftDeckData = leftresponse.data;
          const rightDeckData = rightresponse.data;
          // set the state with left and right deck data
        })
      )
      .catch(error => {
        throw new Error(error);
      })
      .finally(()=>{ });
  }

  // renders the left and right deck components.
  render() {
    return (
      <div className="row">
        <LeftDeck data={this.state.leftDeckData} />
        <RightDeck data={this.state.rightDeckData} />
      </div>
    );
  }
}

// mapStateToProps

export default GamePlayground;
