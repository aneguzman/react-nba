import React, { PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';
import { Row, Col } from 'elemental';
import './header.css';
import img from '../../../public/images/nba_react_logo_blue.png';
const Header = () => {
    return (
        <Row id='header'>
            <Col sm='1/6' className='nba-logo'>
                <img src={img}/> 
            </Col>
            <Col sm='5/6'>
                <nav>
                    <IndexLink to="/feed" activeClassName="active">Home</IndexLink>
                    {"  |  "}
                    <Link to="/scores" activeClassName="active">Scores</Link>
                    {"  |  "}
                    <Link to="/standings" activeClassName="active">Standings</Link>
                    {"  |  "}
                    <Link to="/stats" activeClassName="active">Stats</Link>
                </nav>
            </Col>
        </Row>
        
    );
};

export default Header;
