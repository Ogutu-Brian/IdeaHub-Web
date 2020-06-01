import React from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import './App.scss';
import Routes from './Routes/Routes';

const App: React.FC = () => (
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>
);

export default App;
