// import { AsyncStorage } from 'react-native';
import { ADD_VACCINATION } from '../constants/actions';
import {
  call,
  take,
  put,
} from 'redux-saga';
import addVaccinationSuccess from '../actions/addVaccinationSuccess';
import { KEY } from '../constants/storage';

export const executeSaveVaccinations = (data) => {
  return 2;
  // return AsyncStorage.setItem(KEY, JSON.stringify(data.toJS()));
};

export function* saveVaccinationsAsync(getState) {
  while (yield take(ADD_VACCINATION)) {
    const vaccinations = getState().get('vaccinations');
    yield call(executeSaveVaccinations, vaccinations);
    yield put(addVaccinationSuccess());
  }
}
