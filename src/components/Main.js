import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import Header from './common/Header';

const Main = props => (
  <BrowserRouter>
    <div>
      <Header />
      <div id="mainContent">
        {props.children}
      </div>
    </div>
  </BrowserRouter>
);

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
