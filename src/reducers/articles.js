// action types
const FETCH_NEWS_ITEMS_REQUEST = "FETCH_NEWS_ITEMS_REQUEST";
const FETCH_NEWS_API_CALL_SUCCESS = "FETCH_NEWS_API_CALL_SUCCESS";
const FETCH_NEWS_API_CALL_FAILURE = "FETCH_NEWS_API_CALL_FAILURE";

// reducer with initial state
const initialState = {
  fetching: false,
  data: {},
  error: null
};

const articles = (state = initialState, action) => {
  // debugger;
  switch (action.type) {
    case FETCH_NEWS_ITEMS_REQUEST:
      return { ...state, fetching: true, data: {}, error: null };
    case FETCH_NEWS_API_CALL_SUCCESS:
      return { ...state, fetching: false, data: action.articles, error: null };
    case FETCH_NEWS_API_CALL_FAILURE:
      return { ...state, fetching: false, data: {}, error: action.error };
    default:
      return state;
  }
}

export default articles;
