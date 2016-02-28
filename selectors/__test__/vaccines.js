import { expect } from 'chai';
import selector from '../vaccines';
import vaccines from '../../constants/vaccines';

describe('addForm', () => {
  it('retrieves the vaccines from constants', () => {
    expect(selector()).to.deep.equal(vaccines);
  });
});
