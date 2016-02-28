import { createSelector } from 'reselect';
import shallowVaccines from './vaccines';
import { Map } from 'immutable';

const shallowVaccinations = (state) => state.get('vaccinations');

export default createSelector(
  [shallowVaccinations, shallowVaccines],
  (vaccinations, vaccines) => {
    if (!vaccinations) return Map();
    return vaccinations.map((vaccination, id) => (
      vaccination
        .set('vaccine', vaccines.get(vaccination.get('id')))
        .set('listId', id)
    ));
  }
);
