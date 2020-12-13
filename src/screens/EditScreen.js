import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Context } from '../context/TodoContext'
import TodoForm from '../components/TodoForm'


const EditScreen = ({ navigation }) => {
    const id = navigation.getParam('id')
    const { state, editTodo } = useContext(Context)
    const todo = state.find(todo => todo.id === id) 
    
    return (
        <TodoForm
            initialValues={ {title: todo.title, assigned: todo.assigned}}
            onSubmit={(newTitle, newAssigned) => {
                editTodo(id, newTitle, newAssigned, () => navigation.pop() )
            }}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1, 
        borderColor: 'black', 
        marginBottom: 15, 
        padding: 5, 
        margin: 5
    },
    label: {
        fontSize: 20, 
        marginBottom: 5, 
        margin: 5
    }
})

export default EditScreen