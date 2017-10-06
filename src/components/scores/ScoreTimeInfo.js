import React from 'react';
import './scores.css';
import {  Row, Col } from 'elemental';
import moment from 'moment';

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

export default ScoreTimeInfo;