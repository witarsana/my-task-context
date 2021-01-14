import React, { createContext, useReducer } from 'react';
import { TodoReducer } from '../reducers/TodoReducer';
import { initialTodo } from './InitialTodo';

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [todos, dispatchTodos] = useReducer(TodoReducer, initialTodo);

    return (
        <DataContext.Provider value={{ todos, dispatchTodos }}>
            {props.children}
        </DataContext.Provider>
    )
}