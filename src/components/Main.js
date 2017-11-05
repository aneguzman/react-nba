import React from 'react';
import Header from './common/Header';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';

const Main = (props) => (
  <BrowserRouter>
    <div>
      <Header/>
      <div id="mainContent">
        {props.children}
      </div>
    </div>
  </BrowserRouter>
);

Main.propTypes = {
    children: PropTypes.object,
};

export default Main;
