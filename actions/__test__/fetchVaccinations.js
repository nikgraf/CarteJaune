import { expect } from 'chai';
import fetchVaccinations from '../fetchVaccinations';
import { FETCH_VACCINATIONS } from '../../constants/actions';

describe('fetchVaccinations', () => {
  it('returns FETCH_VACCINATIONS action', () => {
    const expected = {
      type: FETCH_VACCINATIONS,
    };

    expect(fetchVaccinations()).to.deep.equal(expected);
  });
});
