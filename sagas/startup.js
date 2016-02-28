import { put } from 'redux-saga';
import fetchVaccinations from '../actions/fetchVaccinations';

export default function* startup() {
  yield put(fetchVaccinations());
}
