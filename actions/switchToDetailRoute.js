import { SWITCH_TO_DETAIL_ROUTE } from '../constants/actions';

export default (id) => ({
  type: SWITCH_TO_DETAIL_ROUTE,
  id,
});
