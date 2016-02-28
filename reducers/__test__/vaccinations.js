import { OrderedMap } from 'immutable';
import { expect } from 'chai';
import reducer from '../vaccinations';
import {
  ADD_VACCINATION,
  FETCH_VACCINATIONS_SUCCESS,
} from '../../constants/actions';

describe('vaccinations', () => {
  it('returns an initial state', () => {
    const nextState = reducer(undefined, {
      type: 'SOMETHING',
    });
    expect(nextState).to.deep.equal(OrderedMap());
  });

  it('sets the current vaccination id on ADD_VACCINATION', () => {
    const nextState = reducer(undefined, {
      type: ADD_VACCINATION,
      vaccineId: 222,
      vaccinationDate: 444,
    });
    expect(nextState.first().get('id')).to.equal(222);
    expect(nextState.first().get('date')).to.equal(444);
  });

  it('sets the state to the vavvinations from the FETCH_VACCINATIONS_SUCCESS action', () => {
    const nextState = reducer(4444, {
      type: FETCH_VACCINATIONS_SUCCESS,
      vaccinations: OrderedMap({ id: 1, date: 3 }),
    });
    const expected = OrderedMap({ id: 1, date: 3 });
    expect(nextState).to.deep.equal(expected);
  });
});
