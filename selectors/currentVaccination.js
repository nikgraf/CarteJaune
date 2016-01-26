import { createSelector } from 'reselect';
import vaccinations from './vaccinations';

const currentId = (state) => state.get('currentVaccination');

export default createSelector(
  [vaccinations, currentId],
  (list, id) => {
    console.log(id);
    console.log(list.toJS());
    return list.get(id);
  }
);
