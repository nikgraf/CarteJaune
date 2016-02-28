import { expect } from 'chai';
import fetchVaccinationsSuccess from '../fetchVaccinationsSuccess';
import { FETCH_VACCINATIONS_SUCCESS } from '../../constants/actions';

describe('addVaccination', () => {
  it('returns FETCH_VACCINATIONS_SUCCESS action', () => {
    const expected = {
      type: FETCH_VACCINATIONS_SUCCESS,
      vaccinations: [1, 2],
    };

    expect(fetchVaccinationsSuccess([1, 2])).to.deep.equal(expected);
  });
});
