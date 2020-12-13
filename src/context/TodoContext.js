import createDataContext from './createDataContext'
import jsonServer from '../api/jsonServer'


const todoReducer = (state, action) => {
    switch (action.type) {
        case 'get_todos':
            return action.payload
        case 'delete_todo':
            return state.filter(todo => todo.id !== action.payload)
        case 'edit_todo':
            return state.map(todo => {
                return todo.id === action.payload.id ? action.payload : todo
            })
        default: 
            return state    
    }
}

const getTodos = dispatch => {
    return async () => {
        const response = await jsonServer.get('/todos')
        dispatch({ type: 'get_todos', payload: response.data})
    }
}

const deleteTodo = dispatch => {
    return async (id) => {
        await jsonServer.delete(`/todos/${id}`)
        dispatch({type: 'delete_todo', payload: id})
    }
}

const addTodo = dispatch => {
    return async (title, assigned, callback) => {
        await jsonServer.post('/todos', { title, assigned })
        if (callback){
            callback()
        }
    }
}

const editTodo = dispatch => {
    return async (id, title, assigned, callback) => {
        await jsonServer.patch(`/todos/${id}`, {title, assigned})
        dispatch({type: 'edit_todo', payload:{id, title, assigned}})
        if (callback){
            callback()
        }
    }
}


export const { Context, Provider } = createDataContext(
    todoReducer, 
    { getTodos, deleteTodo, addTodo, editTodo }
)