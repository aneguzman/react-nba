import React from 'react';
import './scores.css';
import { Card, Row, Col } from 'elemental' ;
import ScoreInfo from './ScoreInfo';

const ScoreCard = (props) => {

    return (
        <Card className="card">
            <Row className="time-quarter-placeholder">
                <Col sm="1" >
                    <span>7:45</span>&nbsp;&nbsp;
                    <span>3rd</span>
                </Col>
            </Row>
            <ScoreInfo triCode={props.vTeam.triCode} score={props.vTeam.score} />
            <ScoreInfo triCode={props.hTeam.triCode} score={props.hTeam.score}/>
        </Card>
    );
}

export default ScoreCard;
