import React, { createContext, useContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Create a Context
const TodoContext = createContext();

// Reducer to manage CRUD operations and task completion toggle
const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, { ...action.payload, id: uuidv4(), completed: false }];
    case 'DELETE_TASK':
      return state.filter((task) => task.id !== action.payload);
    case 'TOGGLE_TASK':
      return state.map((task) => 
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
    case 'EDIT_TASK':
      return state.map((task) =>
        task.id === action.payload.id ? { ...task, ...action.payload } : task
      );
    default:
      return state;
  }
};

// Custom provider component
export const TodoProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(todoReducer, []);
  
  return (
    <TodoContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

// Custom hook for easy access
export const useTodos = () => useContext(TodoContext);
