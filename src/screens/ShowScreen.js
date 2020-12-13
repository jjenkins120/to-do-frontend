import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Context } from '../context/TodoContext'

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context)
    const todo = state.find(todo => todo.id === navigation.getParam('id'))
    
    return (
        <View>
            <Text style={styles.title}>{todo.title}</Text>
            <Text style={styles.assigned}>{todo.assigned}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        marginTop: 20, 
        marginBottom: 10
    },
    assigned: {
        fontSize: 20,
        textAlign: 'center',
    }
})

export default ShowScreen
