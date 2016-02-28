import { fromJS } from 'immutable';
import { expect } from 'chai';
import selector from '../vaccinations';

describe('vaccinations', () => {
  it('retrieves with data populated vaccinations from the state', () => {
    const state = fromJS({
      vaccinations: {
        1: {
          id: '8b013618-439e-4829-b88f-98a44b420ee8',
        },
      },
    });
    const expected = fromJS({
      1: {
        id: '8b013618-439e-4829-b88f-98a44b420ee8',
        vaccine: {
          name: 'AVA (BioThrax)',
          id: '8b013618-439e-4829-b88f-98a44b420ee8',
          diseases: ['Anthrax'],
        },
        listId: '1',
      },
    });
    expect(selector(state)).to.equal(expected);
  });
});
