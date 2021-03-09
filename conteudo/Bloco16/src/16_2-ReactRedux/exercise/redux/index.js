import { CHANGE_SIGNAL } from './actionCreators';

const initialState = {
  signal: {
    color: 'red',
  },
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SIGNAL:
      return { ...state, signal: { ...state.signal, color: action.payload } };
    default:
      return state;
  }
}

export default reducer;
