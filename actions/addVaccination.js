import { ADD_VACCINATION } from '../constants/actions';

export default (vaccineId, vaccinationDate) => ({
  type: ADD_VACCINATION,
  vaccineId,
  vaccinationDate,
});
