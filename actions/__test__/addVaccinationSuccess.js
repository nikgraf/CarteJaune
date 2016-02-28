import { expect } from 'chai';
import addVaccinationSuccess from '../addVaccinationSuccess';
import { ADD_VACCINATION_SUCCESS } from '../../constants/actions';

describe('addVaccinationSuccess', () => {
  it('returns ADD_VACCINATION_SUCCESS action', () => {
    const expected = {
      type: ADD_VACCINATION_SUCCESS,
    };

    expect(addVaccinationSuccess()).to.deep.equal(expected);
  });
});
