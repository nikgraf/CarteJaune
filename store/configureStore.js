import { createStore, applyMiddleware } from 'redux';
import sagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';
import reducer from '../reducers';
import sagas from '../sagas';

const loggerMiddleware = createLogger({
  stateTransformer: state => state.toJS(),
});

const createStoreWithMiddleware = applyMiddleware(
  sagaMiddleware(sagas),
  loggerMiddleware
)(createStore);

export default (initialState) => (
  createStoreWithMiddleware(reducer, initialState)
);
