const FETCH_NEWS_SOURCES_REQUEST = "FETCH_NEWS_SOURCES_REQUEST";
const FETCH_SOURCES_API_CALL_SUCCESS = "FETCH_SOURCES_API_CALL_SUCCESS";
const FETCH_SOURCES_API_CALL_FAILURE = "FETCH_SOURCES_API_CALL_FAILURE";

const initialState = {
  fetching: false,
  data: {},
  error: null
};

const sources = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS_SOURCES_REQUEST:
      return { ...state, fetching: true, data: {}, error: null };
    case FETCH_SOURCES_API_CALL_SUCCESS:
      return { ...state, fetching: false, data: action.sources, error: null };
    case FETCH_SOURCES_API_CALL_FAILURE:
      return { ...state, fetching: false, data: {}, error: action.error };
    default:
      return state;
  }
}

export default sources;
