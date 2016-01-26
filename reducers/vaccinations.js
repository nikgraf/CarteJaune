import { OrderedMap, Map } from 'immutable';
import {
  ADD_VACCINATION,
  REMOVE_VACCINATION,
} from '../constants/actions';
import uuid from 'uuid';

export default (state = OrderedMap(), action) => {
  switch (action.type) {
    case ADD_VACCINATION:
      return state.set(uuid(), Map({
        id: action.vaccineId,
        date: action.vaccinationDate,
      }));
    case REMOVE_VACCINATION:
      return state;
    default:
      return state;
  }
};
