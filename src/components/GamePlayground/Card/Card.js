import React from "react";
import "./singleCard.module.css";
import {useCallback} from 'react';

const Card = (props) => {

  const clicked = useCallback(data => {
    props.click(data);
  });

  // renders a single card
    return (
      <div
        className={
          "Card col-lg-4" +
          (!props.data.close ? " opened" : "") +
          (props.data.complete ? " matched" : "")
        }
        onClick={() => clicked(props.data)}>
        <div className="front">?</div>
        <div className="back">{props.data.number}</div>
      </div>
    );
}

export default Card;
