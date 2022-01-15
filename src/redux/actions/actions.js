import { ADD_TODO, DONE_TODO, EDIT_TODO, FILTER_TODO } from "./actionsType";
import { v4 as uuidv4 } from "uuid";

export const addTodo = (info) => {
  return {
    type: ADD_TODO,
    payload: { ...info, id: uuidv4(), isDone: false },
  };
};

export const filterTodo = (filter) => {
  return {
    type: FILTER_TODO,
    payload: filter,
  };
};

export const doneTodo = (id) => {
  return { type: DONE_TODO, payload: id };
};

export const editTodo = (info) => {
  return { type: EDIT_TODO, payload: info };
};
