import React from 'react';
import './scores.css';
import { Card, Row, Col } from 'elemental' 

const ScoreCard = (props) => {

    return (
        <div>
            <Card className="card">
                <Row className="time-quarter-placeholder">
                    <Col sm="1" >
                        <span>7:45</span>&nbsp;&nbsp;
                        <span>3rd</span>
                    </Col>
                </Row>
                <Row className="score-info">
                    <Col sm="3/4">
                        <span className="team-logo">
                            <img src="https://cdn.nba.net/assets/logos/teams/secondary/web/CLE.svg"/>
                        </span>
                        <span className="team-name">
                            Cleveland
                        </span>
                    </Col>
                    <Col sm="1/4" className="score">
                        <span>78</span>
                    </Col>
                </Row>
                <Row className="score-info">
                    <Col sm="3/4">
                        <span className="team-logo">
                            <img src="https://cdn.nba.net/assets/logos/teams/secondary/web/GSW.svg"/>
                        </span>
                        <span className="team-name">
                            GSW
                        </span>
                    </Col>
                    <Col sm="1/4" className="score">
                        <span>55</span>
                    </Col>
                </Row>
            </Card>
        </div>
    );
}

export default ScoreCard;