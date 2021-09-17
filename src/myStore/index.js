import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import config from 'utils/config';
import httpMiddleware from 'middlewares/http';
import appReducer from './reducers';

const middlewares = [thunk, httpMiddleware];
let composeFn = compose;

if (config.isDevEnv || config.isLocalEnv) {
  middlewares.push(logger);
  composeFn = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const store = composeFn(applyMiddleware(...middlewares))(createStore)(appReducer);
const persistor = persistStore(store);

export { persistor, store };
