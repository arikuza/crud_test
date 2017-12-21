import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__;

const config = {
  key: 'root',
  storage,
};

const persistReducer = persistCombineReducers(config, rootReducer);

const store = createStore(
  persistReducer,
  reduxDevtools && reduxDevtools(),
)
persistStore(store);

ReactDOM.render(<Provider store={store}>
    <App store={store} />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
