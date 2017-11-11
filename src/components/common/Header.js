import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'elemental';
import './header.css';
import logoImg from '../../../public/images/nba_react_logo_blue.png';

const Header = () => (
  <Row className="header">
    <Col sm="1/6">
      <img src={logoImg} className="header__nba-logo" /> 
    </Col>
    <Col sm="5/6">
      <nav className="header__nav">
        <Link to="/feed" className="header__nav-anchor">Feed</Link>
        <Link to="/scores" className="header__nav-anchor">Scores</Link>
        <Link to="/standings" className="header__nav-anchor">Standings</Link>
        <Link to="/stats" className="header__nav-anchor">Stats</Link>
      </nav>
    </Col>
  </Row>
);

export default Header;
