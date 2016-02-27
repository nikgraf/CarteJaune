import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';
import sagaMiddleware from 'redux-saga';
import sagas from '../sagas';
import createLogger from 'redux-logger';

const loggerMiddleware = createLogger({
  stateTransformer: state => state.toJS(),
});

const createStoreWithMiddleware = applyMiddleware(
  sagaMiddleware(sagas),
  loggerMiddleware
)(createStore);

export default (initialState) => {
  return createStoreWithMiddleware(reducer, initialState);
};
