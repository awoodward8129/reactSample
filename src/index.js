import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from 'react-redux';
import './static/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import configureStore from './store/configureStore';
import * as bookActions from './actions/bookActions';
import {createBrowserHistory} from 'history';

const history = createBrowserHistory();
const location =history.location
const store = configureStore();
store.dispatch(bookActions.fetchBooks());
store.dispatch(bookActions.fetchCart());

history.listen((location, action) => {
  console.log(`The current URL is ${location.pathname}${location.search}${location.hash}`)
  console.log(`The last navigation action was ${action}`)
})
const AppClient = () => (
   <Provider store={store}>
    <Router >
      <App store={store} history={history}/>
    </Router>
  </Provider>
);
ReactDOM.render(
  <AppClient />,
  document.getElementById('root')
);
