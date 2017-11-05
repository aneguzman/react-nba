import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'elemental';
import './header.css';
import logoImg from '../../../public/images/nba_react_logo_blue.png';
const Header = () => (
  <Row id="header">
    <Col sm="1/6" className="nba-logo">
      <img src={logoImg} /> 
    </Col>
    <Col sm="5/6">
      <nav>
        <Link to="/feed" className="active">Feed</Link>
        <Link to="/scores" className="active">Scores</Link>
        <Link to="/standings" className="active">Standings</Link>
        <Link to="/stats" className="active">Stats</Link>
      </nav>
    </Col>
  </Row>
);

export default Header;
