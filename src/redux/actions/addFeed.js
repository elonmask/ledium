import axios from "axios";

export const addFeed = () => {
  return async function(dispatch, getState) {
    const response = await axios.get("https://admin.ledium.shop/goods");
    dispatch({ type: "GET_POST_LIKES", payload: response.data });
    };
  };