import { OrderedMap, Map } from 'immutable';
import uuid from 'uuid';
import {
  ADD_VACCINATION,
  FETCH_VACCINATIONS_SUCCESS,
} from '../constants/actions';

export default (state = OrderedMap(), action) => {
  switch (action.type) {
    case ADD_VACCINATION:
      return state.set(uuid(), Map({
        id: action.vaccineId,
        date: action.vaccinationDate,
      }));
    case FETCH_VACCINATIONS_SUCCESS:
      return action.vaccinations;
    default:
      return state;
  }
};
