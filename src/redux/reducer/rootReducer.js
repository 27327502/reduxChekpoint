import {
  ADD_TODO,
  DONE_TODO,
  EDIT_TODO,
  FILTER_TODO,
} from "../actions/actionsType";

const initialState = {
  filter: "All",
  todos: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, payload] };
    case FILTER_TODO:
      return {
        ...state,
        filter: payload,
      };
    case DONE_TODO:
      return {
        ...state,
        todos: state.todos.map((element) =>
          element.id == payload
            ? { ...element, isDone: !element.isDone }
            : element
        ),
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((element) =>
          element.id == payload.id ? payload : element
        ),
      };
    default:
      return state;
  }
};

export default rootReducer;
