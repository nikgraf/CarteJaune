import { Map } from 'immutable';
import {
  PICK_VACCINE,
  SWITCH_TO_CHOOSE_VACCINE_ROUTE,
} from '../constants/actions';

export default (state = Map(), action) => {
  switch (action.type) {
    case SWITCH_TO_CHOOSE_VACCINE_ROUTE:
      return state.delete('vaccineId');
    case PICK_VACCINE:
      return state.set('vaccineId', action.vaccineId);
    default:
      return state;
  }
};
