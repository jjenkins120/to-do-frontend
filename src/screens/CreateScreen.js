import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Context } from '../context/TodoContext'
import TodoForm from '../components/TodoForm'

const CreateScreen = ({navigation}) => {
    const { addTodo } = useContext(Context)
    return (
        <TodoForm
            onSubmit={(title, assigned) => {
                addTodo(title, assigned, () => navigation.navigate('Home') )
            }}
        />
    )
}

const styles = StyleSheet.create({

})

export default CreateScreen
