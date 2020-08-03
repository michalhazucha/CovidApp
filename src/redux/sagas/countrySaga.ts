import { put, takeEvery, all, fork } from 'redux-saga/effects';
import axios from 'axios';
import { fetchDataAction } from '../actions/actionCreators/countryActionCreators';
import { ActionTypes } from '../actions/types';
import { Button } from 'react-bootstrap';

function* onRecieveData({ payload }: any) {
  try {
    const URL = `https://api.covid19api.com/country/${payload.toLowerCase().replace(/ /g, '-')}/status/confirmed`;
    const { data } = yield axios.get(URL);
    const last = data.length - 1;
    yield put(fetchDataAction(data[last]));
  } catch (e) {
    yield put({ type: 'DATA_LOAD_FAILED', message: e.message });
  }
}
function* watchOnLoadData() {
  yield takeEvery(ActionTypes.getName, onRecieveData);
}

function* countrySaga() {
  yield all([fork(watchOnLoadData)]);
}
export default function* rootSaga() {
  yield all([fork(countrySaga)]);
}
