import { combineReducers } from 'redux';

import todolistReducer from './todolist/reducer';

const rootReducer = combineReducers({
  todoList: todolistReducer,
});

export default rootReducer;
