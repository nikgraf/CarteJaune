import { combineReducers } from 'redux-immutablejs';
import activeRoute from './activeRoute';
import addForm from './addForm';
import vaccinations from './vaccinations';
import currentVaccination from './currentVaccination';

export default combineReducers({
  activeRoute,
  addForm,
  currentVaccination,
  vaccinations,
});
