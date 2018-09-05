import { takeLatest, call, put, take, takeEvery, select } from "redux-saga/effects";
import axios from "axios";

export function* watcherSaga() {
  yield takeLatest("FETCH_NEWS_SOURCES_REQUEST", newsSourcesFetcherSaga)
  yield takeLatest("FETCH_NEWS_ITEMS_REQUEST", newsItemsFetcherSaga);
}

function fetchNewItems(source_id) {
  let api_url = "http://localhost:3000/articles";
  if (source_id !== undefined && source_id !== '0'){
    api_url = api_url + "?source_id=" + source_id
  }
  return axios({
    method: "get",
    url: api_url
  });
}

function* newsItemsFetcherSaga(action) {
  try {
    const response = yield call(fetchNewItems, action.source_id);
    const articles = response.data;
    yield put({ type: "FETCH_NEWS_API_CALL_SUCCESS", articles });

  } catch (error) {
    yield put({ type: "FETCH_NEWS_API_CALL_FAILURE", error });
  }
}

function fetchNewSources() {
  return axios({
    method: "get",
    url: "http://localhost:3000/sources"
  });
}

function* newsSourcesFetcherSaga() {
  try {
    const response = yield call(fetchNewSources);
    const sources = response.data;
    yield put({ type: "FETCH_SOURCES_API_CALL_SUCCESS", sources });

  } catch (error) {
    yield put({ type: "FETCH_SOURCES_API_CALL_FAILURE", error });
  }
}
