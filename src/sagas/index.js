import { takeLatest, call, put, take, takeEvery, select } from "redux-saga/effects";
import axios from "axios";

export function* watcherSaga() {
  yield takeLatest("FETCH_NEWS_SOURCES_REQUEST", newsSourcesFetcherSaga)
  yield takeLatest("FETCH_NEWS_ITEMS_REQUEST", newsItemsFetcherSaga);
}

function fetchNewItems(source_id, page_no) {
  let api_url = "http://10.131.153.34:3000/articles?page_no=" + page_no;
  if (source_id !== undefined && source_id !== 0){
    api_url = api_url + "&source_id=" + source_id
  }
  return axios({
    method: "get",
    url: api_url
  });
}

function* newsItemsFetcherSaga(action) {
  try {
    const state = yield select();
    if(state.articles.page_no < 0){
      throw 'Invalid Page no';
    }
    const response = yield call(fetchNewItems, state.articles.source_id, state.articles.page_no);
    const articles = response.data;
    yield put({ type: "FETCH_NEWS_API_CALL_SUCCESS", articles });

  } catch (error) {
    yield put({ type: "FETCH_NEWS_API_CALL_FAILURE", error });
  }
}

function fetchNewSources() {
  return axios({
    method: "get",
    url: "http://10.131.153.34:3000/sources"
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
