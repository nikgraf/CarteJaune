import { FETCH_VACCINATIONS_SUCCESS } from '../constants/actions';

export default (vaccinations) => ({
  type: FETCH_VACCINATIONS_SUCCESS,
  vaccinations,
});
