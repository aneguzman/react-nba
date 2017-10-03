import React from 'react';
import './scores.css';

const ScoreCard = (props) => {

    return (
        <div className="card">
            <div className="time-quarter-placeholder">
                <span>7:45</span>&nbsp;&nbsp;
                <span>3rd</span>
            </div>
            <div className="score-info">
                <div className="team-logo">
                    <img src="http://via.placeholder.com/50x25"/>
                    <div className="team-name">Cleveland</div>
                </div>
                <div className="score">
                   <span>78</span>
                </div>
            </div>
            <div className="score-info">
                <div className="team-logo">
                    <img src="http://via.placeholder.com/50x25"/>
                    <div className="team-name">Cleveland</div>
                </div>
                <div className="score">
                <span>78</span>
                </div>
            </div>
        </div>
    );
}

export default ScoreCard;