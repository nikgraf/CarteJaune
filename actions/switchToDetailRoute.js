import { SWITCH_TO_DETAIL_ROUTE } from '../constants/actions';

export default (id) => {
  return ({
    type: SWITCH_TO_DETAIL_ROUTE,
    id,
  });
};
