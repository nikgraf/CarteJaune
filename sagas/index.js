// import { AsyncStorage } from 'react-native';
import { put, fork } from 'redux-saga';
import fetchVaccinations from '../actions/fetchVaccinations';

import { saveVaccinationsAsync } from './saveVaccinationsAsync';
import { fetchVaccinationsAsync } from './fetchVaccinationsAsync';

export function* startup() {
  yield put(fetchVaccinations());
}

export default function* root(getState) {
  yield fork(saveVaccinationsAsync, getState);
  yield fork(fetchVaccinationsAsync);
  yield fork(startup);
}
