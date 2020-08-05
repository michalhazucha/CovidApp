import { put, takeEvery, all, fork } from 'redux-saga/effects';
import axios from 'axios';
import { fetchDataAction } from '../actions/actionCreators/countryActionCreators';
import { ActionTypes } from '../actions/types';

function* onRecieveData({ payload }: any) {
  const APIKEY = '11806e16-3d82-491b-9b86-fde03bca4dc9';
  //  ,{
  //     headers: {x
  //       Authorization: APIKEY,
  //     },
  //   }
  try {
    const URL = `https://api.covid19api.com/country/${payload.toLowerCase().replace(/ /g, '-')}/status/confirmed/live`;
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
