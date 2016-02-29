import { AsyncStorage } from 'react-native';
import { ADD_VACCINATION } from '../constants/actions';
import { call, put, select } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import addVaccinationSuccess from '../actions/addVaccinationSuccess';
import addVaccinationFailure from '../actions/addVaccinationFailure';
import { KEY } from '../constants/storage';
import vaccinationsSelector from '../selectors/vaccinations';

/*
 * Returns the Promise of the actual saving from the persitent storage.
 */
export const executeSaveVaccinations = (data) => (
  AsyncStorage.setItem(KEY, JSON.stringify(data.toJS()))
);

/*
 * Retrieves the vaccinations from the Redux store to save them in the presitent storage.
 */
export function* saveVaccinations() {
  try {
    const vaccinations = yield select(vaccinationsSelector);
    yield call(executeSaveVaccinations, vaccinations);
    yield put(addVaccinationSuccess());
  } catch (error) {
    yield put(addVaccinationFailure());
  }
}

/*
 * Waits for an ADD_VACCINATION to trigger saveVaccinations.
 *
 * Will trigger a new call of saveVaccinations on every ADD_VACCINATION.
 */
export function* watchAddVaccination() {
  yield* takeEvery(ADD_VACCINATION, saveVaccinations);
}
