import { Map } from 'immutable';
import { expect } from 'chai';
import reducer from '../addForm';
import {
  PICK_VACCINE,
  SWITCH_TO_CHOOSE_VACCINE_ROUTE,
} from '../../constants/actions';

describe('addForm', () => {
  it('returns an initial state', () => {
    const nextState = reducer(undefined, {
      type: 'SOMETHING',
    });
    expect(nextState).to.deep.equal(Map());
  });

  it('removes the id when switching to the form to have clean state', () => {
    const nextState = reducer(Map({ vaccineId: 'abc' }), {
      type: SWITCH_TO_CHOOSE_VACCINE_ROUTE,
    });
    expect(nextState).to.deep.equal(Map());
  });

  it('add vaccine id to state in case it was picked', () => {
    const nextState = reducer(Map(), {
      type: PICK_VACCINE,
      vaccineId: 'cdf',
    });
    expect(nextState.get('vaccineId')).to.equal('cdf');
  });
});
