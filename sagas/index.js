import { fork } from 'redux-saga/effects';
import { watchAddVaccination } from './saveVaccinations';
import { watchFetchVaccinations } from './fetchVaccinations';
import startup from './startup';

/*
 * The entry point for all the sagas used in this application.
 */
export default function* root() {
  yield [
    fork(watchAddVaccination),
    fork(watchFetchVaccinations),
    fork(startup),
  ];
}
