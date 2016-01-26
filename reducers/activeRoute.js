import {
  ADD_VACCINATION,
  PICK_VACCINE,
  SWITCH_TO_CHOOSE_VACCINE,
} from '../constants/actions';
import { Actions } from 'react-native-router-flux';

export default (state = 'list', action) => {
  switch (action.type) {
    case SWITCH_TO_CHOOSE_VACCINE:
      Actions.chooseVaccine();
      return 'add';
    case ADD_VACCINATION:
      Actions.list();
      return 'list';
    case PICK_VACCINE:
      Actions.chooseDate();
      return 'chooseDate';
    default:
      return state;
  }
};
