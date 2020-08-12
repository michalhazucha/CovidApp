import { put, takeEvery, all, fork } from 'redux-saga/effects';
import axios from 'axios';
import { fetchDataAction, fetchCountriesAction, dataErrorAction } from '../actions/actionCreators/countryActionCreators';
import { ActionTypes } from '../actions/types';

function* onRecieveCountries() {
  try {
    const URL = `https://api.covid19api.com/countries`;
    const { data } = yield axios.get(URL);
    yield put(fetchCountriesAction(data));
  } catch (e) {
    yield put({ type: 'COUNTRIES_LOAD_FAILED', message: e.message });
  }
}
function* onRecieveCountry({ payload }: any) {
  try {
    const URL = `https://api.covid19api.com/premium/country/${payload.toLowerCase().replace(/ /g, '-')}`;
    const { data } = yield axios.get(URL, {
      headers: {
        'X-Access-Token': '5756f9c8-90f8-477b-8757-4462aa63f76f',
      },
    });
    console.log(data);
    const last = data.length - 1;
    yield put(fetchDataAction(data[last]));
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
