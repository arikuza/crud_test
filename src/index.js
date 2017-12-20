import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import { v4 } from 'node-uuid';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__;

const config = {
  key: 'root',
  storage,
}

const persistReducer = persistCombineReducers(config, rootReducer);

// const initialState = {
//   users: {
//     [v4()]: {
//       id: 0,
//       name: 'User Name',
//       birthDate: 'Birth date',
//       adress: 'Adress',
//       city: 'City',
//       mobile: 12345,
//     },
//     [v4()]: {
//       id: 1,
//       name: 'User Name 2',
//       birthDate: 'Birth date 2',
//       adress: 'Adress 2',
//       city: 'City 2',
//       mobile: 12345333,
//     },
//   },
// };

const store = createStore(
  persistReducer,
  // initialState,
  reduxDevtools && reduxDevtools(),

)
persistStore(store);

ReactDOM.render(<Provider store={store}>
    <App store={store} />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
