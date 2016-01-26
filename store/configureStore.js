import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';
import sagaMiddleware from 'redux-saga';
import sagas from '../sagas';

const createStoreWithMiddleware = applyMiddleware(
  sagaMiddleware(sagas)
)(createStore);

export default (initialState) => {
  return createStoreWithMiddleware(reducer, initialState);
};
