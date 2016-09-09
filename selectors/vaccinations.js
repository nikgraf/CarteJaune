import { createSelector } from 'reselect';
import { Map } from 'immutable';
import shallowVaccines from './vaccines';

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
