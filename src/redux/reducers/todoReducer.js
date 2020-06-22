import initialState from "../initialState";
import * as actionTypes from "../actions/actionTypes";

export default function todoReducer(state = initialState, action) {
  var newTodos;
  switch (action.type) {
    case actionTypes.TODO_ADD:
      newTodos = [...state.todos, action.payload];
      return { todos: newTodos, filterTodos: newTodos };
    case actionTypes.TODO_REMOVE:
      newTodos = state.todos.filter((todo) => todo !== action.payload);
      return { todos: newTodos, filterTodos: newTodos };

    case actionTypes.TODO_SEARCH:
      state.filterTodos = state.todos.filter((todo) =>
        todo.includes(action.payload)
      );
      return { todos: state.todos, filterTodos: state.filterTodos };

    default:
      return state;
  }
}
