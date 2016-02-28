import { Map } from 'immutable';
import { expect } from 'chai';
import selector from '../addForm';

describe('addForm', () => {
  it('retrieves addForm from the state', () => {
    expect(selector(Map({ addForm: 'form' }))).to.equal('form');
  });
});
