import initialState from "../initialState";
import * as actionTypes from "../actions/actionTypes";

export default function todoReducer(state = initialState, action) {
  var newTodos;
  switch (action.type) {
    case actionTypes.TODO_ADD:
      newTodos = [...state.todos, { todo: action.payload }];
      return { todos: newTodos, filterTodos: newTodos };
    case actionTypes.TODO_REMOVE:
      newTodos = state.todos.filter((item) => item.todo !== action.payload);
      return { todos: newTodos, filterTodos: newTodos };

    case actionTypes.TODO_SEARCH:
      state.filterTodos = state.todos.filter((item) =>
        item.todo.includes(action.payload)
      );
      return { todos: state.todos, filterTodos: state.filterTodos };
    case actionTypes.GET_TODOS_API:
      return { todos: action.payload, filterTodos: action.payload };

    default:
      return state;
  }
}
