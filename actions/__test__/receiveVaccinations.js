import { expect } from 'chai';
import receiveVaccinations from '../receiveVaccinations';
import { RECEIVE_VACCINATIONS } from '../../constants/actions';

describe('addVaccination', () => {
  it('returns RECEIVE_VACCINATIONS action', () => {
    const expected = {
      type: RECEIVE_VACCINATIONS,
      vaccinations: [1, 2],
    };

    expect(receiveVaccinations([1, 2])).to.deep.equal(expected);
  });
});
