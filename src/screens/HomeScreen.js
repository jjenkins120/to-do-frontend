import React, { useContext, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Context from '../context/TodoContext'


const HomeScreen = () => {
    const { state } = useContext(Context)

    return (
        <View>
            <Text>Home Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default HomeScreen 