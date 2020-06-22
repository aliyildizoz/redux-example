import * as actionTypes from "./actionTypes";

export const todoAdd = (todo) => ({ type: actionTypes.TODO_ADD, payload: todo })

export const todoRemove = (todo) => ({ type: actionTypes.TODO_REMOVE, payload: todo })

export const todoSearch = (todo) => ({ type: actionTypes.TODO_SEARCH, payload: todo })
