import { Map } from 'immutable';
import { expect } from 'chai';
import fetchVaccinationsAsync, { executeFetchVaccinations } from '../fetchVaccinationsAsync';
import { FETCH_VACCINATIONS } from '../../constants/actions';
import {
  call,
  take,
  put,
} from 'redux-saga';
import receiveVaccinations from '../../actions/receiveVaccinations';

describe('saveVaccinationAsync', () => {
  let vaccinations;
  let getState;

  beforeEach(() => {
    vaccinations = Map({ 1: 'a' });
    getState = () => Map({ vaccinations });
  });

  it('should sucessfully fetch the vaccinations from the store', () => {
    const generator = fetchVaccinationsAsync(getState);
    expect(generator.next().value).to.deep.equal(take(FETCH_VACCINATIONS));
    const expectCall = generator.next({ type: FETCH_VACCINATIONS }).value;
    expect(expectCall).to.deep.equal(call(executeFetchVaccinations));
    const expectPut = generator.next().value;
    expect(expectPut).to.deep.equal(put(receiveVaccinations()));
  });
});
