import { expect } from 'chai';
import fetchVaccinationsFailure from '../fetchVaccinationsFailure';
import { FETCH_VACCINATIONS_FAILURE } from '../../constants/actions';

describe('fetchVaccinationsFailure', () => {
  it('returns FETCH_VACCINATIONS_FAILURE action', () => {
    const expected = {
      type: FETCH_VACCINATIONS_FAILURE,
    };

    expect(fetchVaccinationsFailure()).to.deep.equal(expected);
  });
});
