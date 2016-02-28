import { expect } from 'chai';
import switchToChooseVaccineRoute from '../switchToChooseVaccineRoute';
import { SWITCH_TO_CHOOSE_VACCINE_ROUTE } from '../../constants/actions';

describe('switchToChooseVaccineRoute', () => {
  it('returns SWITCH_TO_CHOOSE_VACCINE_ROUTE action', () => {
    const expected = {
      type: SWITCH_TO_CHOOSE_VACCINE_ROUTE,
    };

    expect(switchToChooseVaccineRoute()).to.deep.equal(expected);
  });
});
