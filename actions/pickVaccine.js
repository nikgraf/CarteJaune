import { PICK_VACCINE } from '../constants/actions';

export default (vaccineId) => ({
  type: PICK_VACCINE,
  vaccineId,
});
