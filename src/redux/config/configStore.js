import { combineReducers, createStore } from 'redux';
import todoReducer from '../modules/todos';

const rootReducer = combineReducers({
  todo: todoReducer,
});
const store = createStore(rootReducer);

export default store;
