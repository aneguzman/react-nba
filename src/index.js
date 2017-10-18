import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import './site.css';
import './less/styles.min.css';
import App from "./App";

render(<App />, document.getElementById('app'));
    