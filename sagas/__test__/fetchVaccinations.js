import { expect } from 'chai';
import {
  executeFetchVaccinations,
  fetchVaccinations,
  watchFetchVaccinations,
} from '../fetchVaccinations';
import { FETCH_VACCINATIONS } from '../../constants/actions';
import { call, put, take } from 'redux-saga/effects';
import fetchVaccinationsSuccess from '../../actions/fetchVaccinationsSuccess';
import fetchVaccinationsFailure from '../../actions/fetchVaccinationsFailure';

describe('fetchVaccination', () => {
  describe('watchVaccination', () => {
    it('waits for the FETCH_VACCINATIONS action', () => {
      const generator = watchFetchVaccinations();
      const expectTake = generator.next().value;
      expect(expectTake).to.deep.equal(take(FETCH_VACCINATIONS));
    });
  });

  describe('fetchVaccination', () => {
    it('fetches the vaccinations from the store & triggers fetchVaccinationsSuccess', () => {
      const generator = fetchVaccinations();
      const expectCall = generator.next().value;
      expect(expectCall).to.deep.equal(call(executeFetchVaccinations));
      const expectPut = generator.next().value;
      expect(expectPut).to.deep.equal(put(fetchVaccinationsSuccess()));
    });

    it('triggers fetchVaccinationsFailure in case an error occures', () => {
      const generator = fetchVaccinations();
      generator.next();
      const value = generator.throw({ error: 'retrieving failed' }).value;
      expect(value).to.deep.equal(put(fetchVaccinationsFailure()));
    });
  });
});
