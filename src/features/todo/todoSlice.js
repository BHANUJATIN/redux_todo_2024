import {createSlice, nanoid } from '@reduxjs/toolkit';

const TodoState = {
    PENDING: 'pending',
    DONE: 'done'
};

const initialState = {
    todos: [{id: 1, state:TodoState.PENDING ,text: "Hello world"}]
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                state: TodoState.PENDING,
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
        doneTodo: (state, action) => {
            const { id } = action.payload;
            state.todos = state.todos.map(todo =>
                todo.id === id ? { ...todo, state: TodoState.DONE } : todo
            );
        }
        
    }
})

export const {addTodo, removeTodo, doneTodo} = todoSlice.actions

export default todoSlice.reducer