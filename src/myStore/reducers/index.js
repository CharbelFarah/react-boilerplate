import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import AuthenticationReducer from './authenticationReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authentication']
};

const reducers = combineReducers({
  authentication: AuthenticationReducer
});

const appReducer = persistReducer(persistConfig, reducers);

export default appReducer;
