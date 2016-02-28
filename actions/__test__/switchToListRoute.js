import { expect } from 'chai';
import switchToListRoute from '../switchToListRoute';
import { SWITCH_TO_LIST_ROUTE } from '../../constants/actions';

describe('switchToListRoute', () => {
  it('returns SWITCH_TO_LIST_ROUTE action', () => {
    const expected = {
      type: SWITCH_TO_LIST_ROUTE,
    };

    expect(switchToListRoute()).to.deep.equal(expected);
  });
});
