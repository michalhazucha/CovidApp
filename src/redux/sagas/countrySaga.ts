import { put, takeEvery, all, fork } from 'redux-saga/effects';
import axios from 'axios';
import { fetchDataAction, fetchCountriesAction, dataErrorAction, FetchErrorAction } from '../actions/actionCreators/countryActionCreators';
import { ActionTypes } from '../actions/types';

const APIKEY = '5756f9c8-90f8-477b-8757-4462aa63f76f';
function* onRecieveCountries() {
  try {
    const URL = `https://api.covid19api.com/countries`;
    const { data } = yield axios.get(URL);
    yield put(fetchCountriesAction(data));
  } catch (e) {
    yield put(FetchErrorAction());
  }
}
function* onRecieveCountry({ payload }: String | any) {
  try {
    const URL = `https://api.covid19api.com/premium/country/${payload.toLowerCase().replace(/ /g, '-')}`;
    const { data } = yield axios.get(URL, {
      headers: {
        'X-Access-Token': APIKEY,
      },
    });
    yield put(fetchDataAction(data));
  } catch {
    yield put(dataErrorAction());
  }
}
function* watchOnLoadCountry() {
  yield takeEvery(ActionTypes.getName, onRecieveCountry);
}
function* watchOnLoadCountries() {
  yield takeEvery(ActionTypes.getCountries, onRecieveCountries);
}

function* countrySaga() {
  yield all([fork(watchOnLoadCountries), fork(watchOnLoadCountry)]);
}
export default function* rootSaga() {
  yield all([fork(countrySaga)]);
}
