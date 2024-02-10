import { createSlice, nanoid } from "@reduxjs/toolkit";

//for creating the state we have to first make a initial state

const initialState = {
  todos: sessionStorage.getItem("todos")
    ? JSON.parse(sessionStorage.getItem("todos"))
    : [],
};

//then we have to create a slice withe createSlice
//its takes name
//initial state
//and reducers => reducers are basically use to doing the operations on the state , like adding the data , etc

//reducers takes two parameters:- state , action

// state means actual state , which contained the data, which is payload

//and reducers contained the methods for doing operations on the data
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };

      const existingTodos = JSON.parse(sessionStorage.getItem("todos")) || [];

      const updatedTodos = [...existingTodos, todo];

      sessionStorage.setItem("todos", JSON.stringify(updatedTodos));

      state.todos.push(todo);
    },

    removedTodo: (state, action) => {
      const existingTodos = JSON.parse(sessionStorage.getItem("todos"));
      const updatedTodos = existingTodos.filter(
        (todo) => todo.id !== action.payload
      );
      state.todos = updatedTodos;
      sessionStorage.setItem("todos", JSON.stringify(updatedTodos));
    },
  },
});

export const { addTodo, removedTodo } = todoSlice.actions;

export default todoSlice.reducer;
