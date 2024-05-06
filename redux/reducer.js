import * as types from "./actionType";

const initialState = {
  isProcessing: false,
  isFailed: false,
  isFailedMessage: "",
  data: []
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_FILTERED_DATA_PROCESS:
      return {
        ...state,
        isProcessing: true,
        isFailed: false,
        isFailedMessage: "",
        data: []
      };
    case types.GET_FILTERED_DATA_SUCCESS:
      return {
        ...state,
        isProcessing: false,
        isFailed: false,
        isFailedMessage: "",
        data: payload
      };
    case types.GET_FILTERED_DATA_FAILURE:
      return {
        ...state,
        isProcessing: false,
        isFailed: true,
        isFailedMessage: "Somthing Went Wrong!",
        data: []
      };
    default:
      return state;
  }
};