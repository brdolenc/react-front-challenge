import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { Address, Page, Products } from './reducers';

const persistAddress = {
  key: '@ZE:address',
  storage,
};

const persistPage = {
  key: '@ZE:page',
  storage,
};

const persistProducts = {
  key: '@ZE:products',
  storage,
};

const persistedReducer = combineReducers({
  Address: persistReducer(persistAddress, Address),
  Page: persistReducer(persistPage, Page),
  Products: persistReducer(persistProducts, Products)
});

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };

