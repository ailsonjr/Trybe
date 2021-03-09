import { createStore, combineReducers } from 'redux';
import reducer from '../16_2-ReactRedux/exercise/redux';
import movies from '../16_2-ReactRedux/LiveLecture/reducers';

const rootReducer = combineReducers({
  reducer,
  movies,
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
