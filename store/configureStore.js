import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

export default (initialState) => {
  return createStoreWithMiddleware(reducer, initialState);
};
