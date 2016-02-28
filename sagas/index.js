import { fork } from 'redux-saga';
import saveVaccinationsAsync from './saveVaccinationsAsync';
import fetchVaccinationsAsync from './fetchVaccinationsAsync';
import startup from './startup';

export default function* root(getState) {
  yield fork(saveVaccinationsAsync, getState);
  yield fork(fetchVaccinationsAsync);
  yield fork(startup);
}
