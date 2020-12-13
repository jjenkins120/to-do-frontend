import React, { useContext, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { Context } from '../context/TodoContext'
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
    const { state, getTodos, deleteTodo } = useContext(Context)

    useEffect (() => {
        getTodos()

        navigation.addListener('didFocus', () => {
            getTodos()
        })

        return () => {
            listener.remove()
        }

    }, [])

    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={todo => todo.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id } ) }>
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title} - {item.assigned}</Text>
                                <TouchableOpacity onPress={() => deleteTodo(item.id)}>
                                    <Ionicons name='trash-outline' style={styles.icon}/>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

HomeScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <Entypo name="add-to-list" style={styles.headerIcon}/>
          </TouchableOpacity>
        ),
    };
}


const styles = StyleSheet.create({
    row: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,  
        borderTopWidth: 1,  
        borderColor: 'black'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    },
    headerIcon: {
        marginRight: 20, 
        fontSize: 30
    }
})

export default HomeScreen 