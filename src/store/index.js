import {
  combineReducers,
  createStore,
  applyMiddleware,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware  from 'redux-saga';

import rootSaga from './sagas';

import user from './reducers/user';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  user,
});

const middlewares = composeWithDevTools(applyMiddleware(sagaMiddleware));

const store = createStore(
  rootReducer,
  middlewares,
);

sagaMiddleware.run(rootSaga);

export default store;
