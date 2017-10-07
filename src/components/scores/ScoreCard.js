import React, { PropTypes } from 'react';
import { Card, Row, Col } from 'elemental' ;
import ScoreInfo from './ScoreInfo';
import ScoreTimeInfo from './ScoreTimeInfo';
import './scores.css';

const ScoreCard = (props) => {
    return (
        <Card className="card">
            <Row className="time-quarter-placeholder">
                <Col sm="1" >
                    <ScoreTimeInfo gameStatus={ props.statusNum } 
                        startTimeET={ props.startTimeEastern } clock={props.clock} startTimeUTC={ props.startTimeUTC }
                        currentPeriod={ props.period.current }/>
                </Col>
            </Row>
            <ScoreInfo triCode={props.vTeam.triCode} score={props.vTeam.score} />
            <ScoreInfo triCode={props.hTeam.triCode} score={props.hTeam.score}/>
        </Card>
    );
}

ScoreCard.propTypes = {
    vteam: PropTypes.object,
    hTeam: PropTypes.object,
    statusNum: PropTypes.number,
    startTimeEastern: PropTypes.string,
    startTimeUTC: PropTypes.string,
    clock: PropTypes.string,
    period: PropTypes.object
}

export default ScoreCard;
