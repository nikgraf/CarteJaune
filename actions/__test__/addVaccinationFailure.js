import { expect } from 'chai';
import addVaccinationFailure from '../addVaccinationFailure';
import { ADD_VACCINATION_FAILURE } from '../../constants/actions';

describe('addVaccinationFailure', () => {
  it('returns ADD_VACCINATION_FAILURE action', () => {
    const expected = {
      type: ADD_VACCINATION_FAILURE,
    };

    expect(addVaccinationFailure()).to.deep.equal(expected);
  });
});
