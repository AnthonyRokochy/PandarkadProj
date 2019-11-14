import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './sass/main.sass';
import App from './components/App';
import store from './redux/store/store';

const history = createBrowserHistory();
const render = (MyApp) => {
  ReactDOM.render(
      <Provider store={store}>
          <Router history={history}>
              <MyApp />
          </Router>
      </Provider>,
      document.getElementById('root'),
  );
};

render(App);
