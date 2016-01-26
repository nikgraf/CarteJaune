import { OrderedMap, Map } from 'immutable';
import {
  ADD_VACCINATION,
  RECEIVE_VACCINATIONS,
} from '../constants/actions';
import uuid from 'uuid';

export default (state = OrderedMap(), action) => {
  switch (action.type) {
    case ADD_VACCINATION:
      return state.set(uuid(), Map({
        id: action.vaccineId,
        date: action.vaccinationDate,
      }));
    case RECEIVE_VACCINATIONS:
      return action.vaccinations;
    default:
      return state;
  }
};
