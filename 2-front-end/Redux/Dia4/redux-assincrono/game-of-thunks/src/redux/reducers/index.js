//import { START_FETCH, SUCCESS_FETCH } from './actions';
const INITIAL_STATE = {
  isLoading: false,
  character: '',
}

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'START_FETCH':
      return {
        ...state,
        isLoading: true,
      }
    case 'SUCCESS_FETCH':
      return {
        ...state,
        isLoading: false,
        character: action.character[0],
      }  
    default:
      return state;
  };
};

export default reducer;