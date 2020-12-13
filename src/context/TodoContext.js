import createDataContext from './createDataContext'

const todoReducer = (state, action) => {
    switch (action.type) {
        case 'get_todos':
        case 'delete_todo':
        case 'edit_todo':
        default: 
            return state    
    }
}

export const { Context, Provider } = createDataContext(
    todoReducer, 
    { addTodo, deleteTodo, editTodo, getTodos}
)