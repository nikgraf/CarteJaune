import { expect } from 'chai';
import addVaccination from '../addVaccination';
import { ADD_VACCINATION } from '../../constants/actions';

describe('addVaccination', () => {
  it('returns ADD_VACCINATION action', () => {
    const expected = {
      type: ADD_VACCINATION,
      vaccineId: 2,
      vaccinationDate: 3,
    };

    expect(addVaccination(2, 3)).to.deep.equal(expected);
  });
});
