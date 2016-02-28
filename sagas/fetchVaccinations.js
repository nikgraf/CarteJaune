import { AsyncStorage } from 'react-native';
import { FETCH_VACCINATIONS } from '../constants/actions';
import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import fetchVaccinationsSuccess from '../actions/fetchVaccinationsSuccess';
import fetchVaccinationsFailure from '../actions/fetchVaccinationsFailure';
import { KEY } from '../constants/storage';
import { fromJS, OrderedMap } from 'immutable';

/**
 * Returns a promise of the actual fetching from the persitent storage.
 */
export const executeFetchVaccinations = () => (
  AsyncStorage.getItem(KEY)
    .then((result) => {
      if (result === null) return OrderedMap();
      return fromJS(JSON.parse(result));
    })
);

/**
 * Retrieves the vaccinations from the presistent storage.
 */
export function* fetchVaccinations() {
  try {
    const vaccinations = yield call(executeFetchVaccinations);
    yield put(fetchVaccinationsSuccess(vaccinations));
  } catch (error) {
    yield put(fetchVaccinationsFailure());
  }
}

/*
 * Waits for an FETCH_VACCINATIONS to trigger fetchVaccinations.
 *
 * Whenever fetchVaccinations is in progress it doesn't trigger a new call of it.
 */
export function* watchFetchVaccinations() {
  yield* takeLatest(FETCH_VACCINATIONS, fetchVaccinations);
}
