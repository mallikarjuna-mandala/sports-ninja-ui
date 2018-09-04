// action types
const API_CALL_REQUEST = "FETCH_NEWS_ITEMS_REQUEST";
const API_CALL_SUCCESS = "FETCH_NEWS_API_CALL_SUCCESS";
const API_CALL_FAILURE = "FETCH_NEWS_API_CALL_FAILURE";

// reducer with initial state
const initialState = {
  fetching: false,
  articles: {},
  error: null
};

const reducer = (state = initialState, action) => {
  // debugger;
  switch (action.type) {
    case API_CALL_REQUEST:
      return { ...state, fetching: true, articles: {}, error: null };
    case API_CALL_SUCCESS:
      return { ...state, fetching: false, articles: action.articles, error: null };
    case API_CALL_FAILURE:
      return { ...state, fetching: false, articles: {}, error: action.error };
    default:
      return state;
  }
}

export default reducer;
