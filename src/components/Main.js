import React from 'react';
import Header from './common/Header';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';

class Main extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header/>
          <div id="mainContent">
            {this.props.children}
          </div>
        </div>
      </BrowserRouter>
    );
  };
};

Main.propTypes = {
    children: PropTypes.object,
};

export default Main;
