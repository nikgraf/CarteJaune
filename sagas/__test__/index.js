import { expect } from 'chai';
import { fork } from 'redux-saga/effects';
import root from '../index';
import { watchFetchVaccinations } from '../fetchVaccinations';
import { watchAddVaccination } from '../saveVaccinations';
import startup from '../startup';

describe('root', () => {
  it('should fork all the generators', () => {
    const generator = root();
    const expected = [
      fork(watchAddVaccination),
      fork(watchFetchVaccinations),
      fork(startup),
    ];
    expect(generator.next().value).to.deep.equal(expected);
  });
});
