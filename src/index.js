import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import Reducer from './reducer'
import Router from "./router";
import reportWebVitals from './reportWebVitals';
import './language';
require('./mock/index');


ReactDOM.render(
      <Reducer>
          <Router/>
      </Reducer>
    ,document.getElementById('root')
);

reportWebVitals();
