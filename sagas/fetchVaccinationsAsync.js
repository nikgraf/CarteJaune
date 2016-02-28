import { AsyncStorage } from 'react-native';
import { FETCH_VACCINATIONS } from '../constants/actions';
import {
  call,
  take,
  put,
} from 'redux-saga';
import receiveVaccinations from '../actions/receiveVaccinations';
import { KEY } from '../constants/storage';
import { fromJS, OrderedMap } from 'immutable';

export const executeFetchVaccinations = () => {
  return AsyncStorage.getItem(KEY)
    .then((result) => {
      if (result === null) return OrderedMap();
      return fromJS(JSON.parse(result));
    });
};

export function* fetchVaccinationsAsync() {
  while (yield take(FETCH_VACCINATIONS)) {
    const vaccinations = yield call(executeFetchVaccinations);
    yield put(receiveVaccinations(vaccinations));
  }
}
