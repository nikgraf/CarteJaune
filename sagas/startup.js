import { put } from 'redux-saga/effects';
import fetchVaccinations from '../actions/fetchVaccinations';

export default function* startup() {
  yield put(fetchVaccinations());
}
