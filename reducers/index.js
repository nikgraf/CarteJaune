import { combineReducers } from 'redux-immutablejs';
import activeRoute from './activeRoute';
import addForm from './addForm';
import vaccinations from './vaccinations';

export default combineReducers({
  activeRoute,
  addForm,
  vaccinations,
});
