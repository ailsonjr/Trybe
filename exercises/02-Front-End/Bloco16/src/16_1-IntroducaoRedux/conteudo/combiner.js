// Esse arquivo é apenas um exemplo, não efeito prático

import { combineReducers } from 'redux';
import meuReducer from './meuReducer';
import meuOutroReducer from './meuOutroReducer';

const reducerCombinado = combineReducers({
  meuReducer,
  meuOutroReducer
});

export default reducerCombinado;

/* Agora basta fazer a sua importação no seu store:

  import { combineReducers } from 'redux';
  import reducerCombinado from './reducers/index';

  const store = createStore(reducerCombinado)

*/