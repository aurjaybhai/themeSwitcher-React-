import { createSlice, nanoid } from "@reduxjs/toolkit"; // nano id generates the unique id

const initialState = {
  todos: [{ id: 1, text: "hello world" }],
};

// Reducer hota wo ek functionality hota h
// we will make the slice which is the bigger version of reducer

// function sayHello() {
//   console.log("Hello World");
// }

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // reducers meh functions and properties aate h
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    }, // here we need to add property in this addTodo property
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions; // bcoz we are going to use in the components

export default todoSlice.reducer // this is for the store.js bcoz in this we need to register all the reducer
