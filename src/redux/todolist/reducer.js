import {
  ADD_TODO,
  EDIT_TODO,
  TOGGLE_TODO,
  ADD_HISTORY,
  DELETE_TODO,
  CLEAR_HISTORY,
} from './type';

const initialState = {
  todo: [],
  history: [],
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todo: [action.payload, ...state.todo],
        loading: false,
      };
    case EDIT_TODO:
      const EditedTodo = state.todo.find((e) => e.id === action.payload.id);
      EditedTodo.title = action.payload.title;

      const newEditedTodo = state.todo.map((e) =>
        e.id === action.payload.id ? EditedTodo : e
      );

      return {
        ...state,
        todo: newEditedTodo,
      };
    case TOGGLE_TODO:
      const ToggleChecked = state.todo.find((e) => e.id === action.payload);
      ToggleChecked.completed = !ToggleChecked.completed;

      const newTodo = state.todo.map((e) =>
        e.id === action.payload ? ToggleChecked : e
      );

      return {
        ...state,
        todo: newTodo,
      };
    case DELETE_TODO:
      const deletedTodo = state.todo.filter((e) => e.id !== action.payload);
      return {
        ...state,
        todo: deletedTodo,
      };
    case ADD_HISTORY:
      return {
        ...state,
        history: [action.payload, ...state.history],
      };
    case CLEAR_HISTORY:
      return {
        ...state,
        history: [],
      };
    default:
      return state;
  }
};

export default reducer;
