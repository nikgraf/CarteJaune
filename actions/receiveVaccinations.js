import { RECEIVE_VACCINATIONS } from '../constants/actions';

export default (vaccinations) => ({
  type: RECEIVE_VACCINATIONS,
  vaccinations,
});
