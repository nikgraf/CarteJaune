import { Actions } from 'react-native-router-flux';
import {
  ADD_VACCINATION_SUCCESS,
  PICK_VACCINE,
  SWITCH_TO_CHOOSE_VACCINE_ROUTE,
  SWITCH_TO_DETAIL_ROUTE,
  SWITCH_TO_LIST_ROUTE,
} from '../constants/actions';

export default (state = 'list', action) => {
  switch (action.type) {
    case SWITCH_TO_CHOOSE_VACCINE_ROUTE:
      setTimeout(() => Actions.chooseVaccine(), 0);
      return 'add';
    case ADD_VACCINATION_SUCCESS:
      setTimeout(() => Actions.list(), 0);
      return 'list';
    case PICK_VACCINE:
      setTimeout(() => Actions.chooseDate(), 0);
      return 'chooseDate';
    case SWITCH_TO_DETAIL_ROUTE:
      setTimeout(() => Actions.detail(), 0);
      return 'detail';
    case SWITCH_TO_LIST_ROUTE:
      setTimeout(() => Actions.list(), 0);
      return 'list';
    default:
      return state;
  }
};
