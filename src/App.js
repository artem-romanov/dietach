import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';

import Routes from './components/router';

import history from './utils/routerHistory';
import store from './store';

const App = () => (
  <Router history={history}>
    <Provider store={store}>
      <Route 
        component={Routes}
      />
    </Provider>
  </Router>
);

export default App;
