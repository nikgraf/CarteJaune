import { expect } from 'chai';
import reducer from '../currentVaccination';
import {
  SWITCH_TO_DETAIL_ROUTE,
  SWITCH_TO_LIST_ROUTE,
} from '../../constants/actions';

describe('currentVaccination', () => {
  it('returns an initial state', () => {
    const nextState = reducer(undefined, {
      type: 'SOMETHING',
    });
    expect(nextState).to.be.null();
  });

  it('sets the current vaccination id on SWITCH_TO_DETAIL_ROUTE', () => {
    const nextState = reducer(undefined, {
      type: SWITCH_TO_DETAIL_ROUTE,
      id: 3225,
    });
    expect(nextState).to.equal(3225);
  });

  it('resets the current vaccination id to null on SWITCH_TO_LIST_ROUTE', () => {
    const nextState = reducer(4444, {
      type: SWITCH_TO_LIST_ROUTE,
    });
    expect(nextState).to.be.null();
  });
});
