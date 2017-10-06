import React from 'react';
import './scores.css';
import { Card, Row, Col } from 'elemental' ;
import ScoreInfo from './ScoreInfo';
import ScoreTimeInfo from './ScoreTimeInfo';

const ScoreCard = (props) => {

    return (
        <Card className="card">
            <Row className="time-quarter-placeholder">
                <Col sm="1" >
                    <ScoreTimeInfo gameStatus={ props.statusNum } 
                        startTimeET={ props.startTimeEastern } clock={props.clock} startTimeUTV={ props.startTimeUTC }
                        currentPeriod={ props.period.current }/>
                </Col>
            </Row>
            <ScoreInfo triCode={props.vTeam.triCode} score={props.vTeam.score} />
            <ScoreInfo triCode={props.hTeam.triCode} score={props.hTeam.score}/>
        </Card>
    );
}

export default ScoreCard;
