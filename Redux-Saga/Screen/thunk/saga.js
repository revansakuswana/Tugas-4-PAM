import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addData(action) {
  try {
    const response = yield call(axios.post, 'https://example.com/api/data', action.payload);
    yield put({ type: 'ADD_DATA_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'ADD_DATA_FAILURE', payload: error.message });
  }
}

function* deleteData(action) {
  try {
    yield call(axios.delete, `https://example.com/api/data/${action.payload}`);
    yield put({ type: 'DELETE_DATA_SUCCESS', payload: action.payload });
  } catch (error) {
    yield put({ type: 'DELETE_DATA_FAILURE', payload: error.message });
  }
}

function* editData(action) {
  try {
    const response = yield call(axios.put, `https://example.com/api/data/${action.payload.id}`, action.payload.data);
    yield put({ type: 'EDIT_DATA_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'EDIT_DATA_FAILURE', payload: error.message });
  }
}

export function* watchData() {
  yield takeLatest('ADD_DATA_REQUEST', addData);
  yield takeLatest('DELETE_DATA_REQUEST', deleteData);
  yield takeLatest('EDIT_DATA_REQUEST', editData);
}
