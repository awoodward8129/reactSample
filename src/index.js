import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter as Router, browserHistory } from 'react-router-dom';
import {Provider} from 'react-redux';
import './static/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const AppClient = () => (
   <Provider store={store}>
    <Router history={browserHistory}>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(
  <AppClient />,
  document.getElementById('root')
);
