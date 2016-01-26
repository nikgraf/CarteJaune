import {
  SWITCH_TO_DETAIL_ROUTE,
  SWITCH_TO_LIST_ROUTE,
} from '../constants/actions';

export default (state = null, action) => {
  switch (action.type) {
    case SWITCH_TO_DETAIL_ROUTE:
      return action.id;
    case SWITCH_TO_LIST_ROUTE:
      return null;
    default:
      return state;
  }
};
