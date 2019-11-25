import React, { Component } from 'react';

const GameActionBar = () => {
    return(
        <div className="row">
        <div className="play col-lg-2 col-md-2 col-sm-2 col-xs-2">
            <button type="button" className="btn btn-primary">Play/Shuffle</button>
        </div>
        <div className="reset-score col-lg-2 col-md-2 col-sm-2 col-xs-2">
            <button type="button" className="btn btn-primary">Reset High Score</button>
        </div>
        <div className="turns col-lg-6 col-md-6 col-sm-6 col-xs-6"></div>
        <div>Turns so Far</div>
    </div>
    )
}

export default GameActionBar;