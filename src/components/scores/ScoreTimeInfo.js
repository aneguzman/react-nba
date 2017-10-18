import React from 'react';
import './scores.css';
import {  Row, Col } from 'elemental';
import moment from 'moment';
import PropTypes from 'prop-types';

const ScoreTimeInfo = (props) => {
    let imgSrc = `https://cdn.nba.net/assets/logos/teams/secondary/web/${props.triCode}.svg`
    return (
        <span>
                { props.gameStatus == 1 ? (
                    <span>
                        { props.startTimeET ? props.startTimeET.split('ET')[0] 
                        : moment(props.startTimeUTC).format('hh:mm A') }
                    </span>
                ) : props.gameStatus == 2 ? (   
               
                    <span>
                        <span>{props.clock}</span>&nbsp;&nbsp;
                        <span>
                            {props.currentPeriod}
                            {props.currentPeriod == 1? 'st' : props.currentPeriod == 2 ? 'nd' 
                                : props.currentPeriod == 3 ? 'rd': 'th'}

                        </span>
                    </span>
                ) : (
                    <span>FINAL</span>
                )
                }
        </span>
        
    );
}

ScoreTimeInfo.propTypes = {
    startTimeET: PropTypes.string,
    startTimeUTC: PropTypes.string,
    currentPeriod: PropTypes.number,
    clock: PropTypes.string,
    gameStatus: PropTypes.number
}

export default ScoreTimeInfo;