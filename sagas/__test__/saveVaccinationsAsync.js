import { Map } from 'immutable';
import { expect } from 'chai';
import {
  saveVaccinationsAsync,
  executeSaveVaccinations,
} from '../saveVaccinationsAsync';
import { ADD_VACCINATION } from '../../constants/actions';
import {
  call,
  take,
  put,
} from 'redux-saga';
import addVaccinationSuccess from '../../actions/addVaccinationSuccess';

describe('saveVaccinationAsync', () => {
  let vaccinations;
  let getState;

  beforeEach(() => {
    vaccinations = Map({ 1: 'a' });
    getState = () => Map({ vaccinations });
  });

  it('should sucessfully save the vaccinations to the store', () => {
    const generator = saveVaccinationsAsync(getState);
    expect(generator.next().value).to.deep.equal(take(ADD_VACCINATION));
    const expectCall = generator.next({ type: ADD_VACCINATION }).value;
    expect(expectCall).to.deep.equal(call(executeSaveVaccinations, vaccinations));
    const expectPut = generator.next().value;
    expect(expectPut).to.deep.equal(put(addVaccinationSuccess()));
  });
});
