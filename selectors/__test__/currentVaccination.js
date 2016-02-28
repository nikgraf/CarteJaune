import { fromJS } from 'immutable';
import { expect } from 'chai';
import selector from '../currentVaccination';

describe('currentVaccination', () => {
  it('retrieves currentVaccination from the state', () => {
    const state = fromJS({
      vaccinations: {
        1: {
          id: '8b013618-439e-4829-b88f-98a44b420ee8',
        },
        2: {
          id: 'f3e08a56-003c-4b46-9dea-216298401ca0',
        },
      },
      currentVaccination: '1',
    });
    const expected = fromJS({
      id: '8b013618-439e-4829-b88f-98a44b420ee8',
      vaccine: {
        name: 'AVA (BioThrax)',
        id: '8b013618-439e-4829-b88f-98a44b420ee8',
        diseases: ['Anthrax'],
      },
      listId: '1',
    });
    expect(selector(state)).to.equal(expected);
  });
});
