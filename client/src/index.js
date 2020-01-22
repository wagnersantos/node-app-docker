import React from 'react';

import 'config/ReactotronConfig';

import Bar from 'components/StatusBar';
import { Snackbar } from 'components';

import { Provider } from 'react-redux';
import Routes from 'routes';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Bar />
    <Routes />
    <Snackbar />
  </Provider>
);

export default App;
