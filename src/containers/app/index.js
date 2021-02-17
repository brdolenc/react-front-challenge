import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Layout from '../../components/templates/layout';
import Pages from '../pages';

import { store, persistor } from '../../store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Pages />
      </PersistGate>
  </Provider>
  );
};

export default App;