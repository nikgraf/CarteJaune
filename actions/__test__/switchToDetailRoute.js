import { expect } from 'chai';
import switchToDetailRoute from '../switchToDetailRoute';
import { SWITCH_TO_DETAIL_ROUTE } from '../../constants/actions';

describe('switchToDetailRoute', () => {
  it('returns SWITCH_TO_DETAIL_ROUTE action', () => {
    const expected = {
      type: SWITCH_TO_DETAIL_ROUTE,
      id: 'abc',
    };

    expect(switchToDetailRoute('abc')).to.deep.equal(expected);
  });
});
