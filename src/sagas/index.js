import { takeLatest, call, put, take, takeEvery, select } from "redux-saga/effects";
import axios from "axios";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest("FETCH_NEWS_SOURCES_REQUEST", newsSourcesFetcherSaga)
  yield takeLatest("FETCH_NEWS_ITEMS_REQUEST", newsItemsFetcherSaga);
}

// function that makes the api request and returns a Promise for response
function fetchNewItems() {
  return axios({
    method: "get",
    url: "http://localhost:3000/articles"
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* newsItemsFetcherSaga() {
  try {
    const response = yield call(fetchNewItems);
    const articles = response.data;

    // dispatch a success action to the store with the new news Items
    yield put({ type: "FETCH_NEWS_API_CALL_SUCCESS", articles });

  } catch (error) {
    // dispatch a failure action to the store with the error
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

    // dispatch a success action to the store with the new user_details
    yield put({ type: "FETCH_SOURCES_API_CALL_SUCCESS", sources });

  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "FETCH_SOURCES_API_CALL_FAILURE", error });
  }
}
