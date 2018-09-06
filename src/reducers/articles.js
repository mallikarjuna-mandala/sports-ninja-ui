const FETCH_NEWS_ITEMS_REQUEST = "FETCH_NEWS_ITEMS_REQUEST";
const FETCH_NEWS_API_CALL_SUCCESS = "FETCH_NEWS_API_CALL_SUCCESS";
const FETCH_NEWS_API_CALL_FAILURE = "FETCH_NEWS_API_CALL_FAILURE";

const initialState = {
  fetching: false,
  data: {},
  page_no: 0,
  source_id: 0,
  error: null
};

const articles = (state = initialState, action) => {
  let page_no = state.page_no;
  let source_id = state.source_id;
  switch (action.type) {
    case FETCH_NEWS_ITEMS_REQUEST:
      if(action.source_id){
        page_no = 0
        source_id = parseInt(action.source_id);
      }
      page_no = page_number(action, page_no);
      return { ...state, fetching: true, data: state.data, error: state.error, page_no: page_no, source_id: source_id};
    case FETCH_NEWS_API_CALL_SUCCESS:
      return { ...state, fetching: false, data: action.articles, error: state.error, page_no: page_no, source_id: source_id };
    case FETCH_NEWS_API_CALL_FAILURE:
      return { ...state, fetching: false, data: state.data, error: action.error, page_no: page_no, source_id: source_id };
    default:
      return state;
  }
}

const page_number = (action, page_num) =>{
  if (action.action_name === 'PREVIOUS'){
    return page_num - 1;
  }
  else if (action.action_name === 'NEXT') {
    return page_num + 1;
  }
  else {
    return page_num;
  }
}

export default articles;
