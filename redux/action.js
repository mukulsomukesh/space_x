import axios from "axios";
import * as types from "./actionType";

// apply filters
const applyFilters = (status, type, originalLaunch) => async (dispatch) => {
  // when we process
  dispatch({ type: types.GET_FILTERED_DATA_PROCESS });

  try {
    // make get request
    const res = await axios.get(
      `https://api.spacexdata.com/v3/capsules?status=${status}&type=${type}&original_launch=${originalLaunch}`
    );

    // dispatch if request success
    dispatch({
      type: types.GET_FILTERED_DATA_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    // dispatch if request failed
    dispatch({
      type: types.GET_FILTERED_DATA_FAILURE,
      payload: "Somthing Went Wront",
    });
  }
};

export { applyFilters };