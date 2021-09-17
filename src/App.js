import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store, persistor } from 'myStore/index';
import Routes from 'routes/index';
import history from 'utils/history';
import './App.scss';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<>Loading ...</>} persistor={persistor}>
        <Router history={history}>
          <Routes />
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
