import { REQUEST_STARTED, REQUEST_SUCCESSFUL, REQUEST_FAILED } from "../actions";

const INITIAL_STATE = {
  isFetching: false,
  imageURL: '',
  errorMessage: '',
};

const dogReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case REQUEST_STARTED:
      return {
        ...state,
        isFetching: true,
        errorMessage: '',
        imageURL: '',
      };
    case REQUEST_SUCCESSFUL:
      return {
        ...state,
        isFetching: false,
        imageURL: action.payload,
        errorMessage: '',
      };
    case REQUEST_FAILED:
        return {
          ...state,
          isFetching: false,
          errorMessage: action.payload,
          imageURL: ""
        }; 
    default:
        return state;
  }
};

export default dogReducer;