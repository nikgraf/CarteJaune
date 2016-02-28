import { expect } from 'chai';
import pickVaccine from '../pickVaccine';
import { PICK_VACCINE } from '../../constants/actions';

describe('pickVaccine', () => {
  it('returns PICK_VACCINE action', () => {
    const expected = {
      type: PICK_VACCINE,
      vaccineId: 2,
    };

    expect(pickVaccine(2)).to.deep.equal(expected);
  });
});
