import { expect } from 'chai';
import { put } from 'redux-saga/effects';
import fetchVaccinations from '../../actions/fetchVaccinations';
import startup from '../startup';

describe('startup', () => {
  it('should fetch the vaccinations', () => {
    const generator = startup();
    const expectPut = generator.next().value;
    expect(expectPut).to.deep.equal(put(fetchVaccinations()));
  });
});
