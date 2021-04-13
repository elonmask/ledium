const initialState = {
    feed: {}
  };
  
  function rootReducer(state = initialState, action) {
    if (action.type === "ADD_FEED") {
      return {
        ...state,
        data: action.payload,
      }
    }
    return state;
  };
  
  export default rootReducer;