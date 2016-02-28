import { expect } from 'chai';
import { fork } from 'redux-saga';
import root from '../index';
import fetchVaccinationsAsync from '../fetchVaccinationsAsync';
import saveVaccinationsAsync from '../saveVaccinationsAsync';
import startup from '../startup';

describe('root', () => {
  it('should fork all the generators', () => {
    const getState = () => null;
    const generator = root(getState);

    expect(generator.next().value).to.deep.equal(fork(saveVaccinationsAsync, getState));
    expect(generator.next().value).to.deep.equal(fork(fetchVaccinationsAsync));
    expect(generator.next().value).to.deep.equal(fork(startup));
  });
});
