import React, { PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';
import './header.css';
const Header = () => {
    return (
        <nav>
            <IndexLink to="/feed" activeClassName="active">Home</IndexLink>
            {"  |  "}
            <Link to="/scores" activeClassName="active">Scores</Link>
            {"  |  "}
            <Link to="/standings" activeClassName="active">Standings</Link>
            {"  |  "}
            <Link to="/stats" activeClassName="active">Stats</Link>
        </nav>
    );
};

export default Header;
