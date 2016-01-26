import { AsyncStorage } from 'react-native';
import { take, put, call, fork } from 'redux-saga';
import { ADD_VACCINATION, FETCH_VACCINATIONS } from '../constants/actions';
import { KEY } from '../constants/storage';
import addVaccinationSuccess from '../actions/addVaccinationSuccess';
import receiveVaccinations from '../actions/receiveVaccinations';
import fetchVaccinations from '../actions/fetchVaccinations';
import { fromJS } from 'immutable';

const executeAddVaccinations = (data) => {
  return AsyncStorage.setItem(KEY, JSON.stringify(data.toJS()));
};

export function* addVaccinationAsync(getState) {
  while (yield take(ADD_VACCINATION)) {
    const vaccinations = getState().get('vaccinations');
    yield call(executeAddVaccinations, vaccinations);
    yield put(addVaccinationSuccess());
  }
}

const executeFetchVaccinations = () => {
  return AsyncStorage.getItem(KEY)
    .then((result) => fromJS(JSON.parse(result)));
};

export function* fetchVaccinationsAsync() {
  while (yield take(FETCH_VACCINATIONS)) {
    const vaccinations = yield call(executeFetchVaccinations);
    yield put(receiveVaccinations(vaccinations));
  }
}

export function* startup() {
  yield put(fetchVaccinations());
}

export default function* root(getState) {
  yield fork(addVaccinationAsync, getState);
  yield fork(fetchVaccinationsAsync);
  yield fork(startup);
}
