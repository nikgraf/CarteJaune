import { createSelector } from 'reselect';
import vaccinations from './vaccinations';

const currentId = (state) => state.get('currentVaccination');

export default createSelector(
  [vaccinations, currentId],
  (list, id) => {
    return list.get(id);
  }
);
