import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

const SignInScreen = ({navigation}) => {
    return (
        <View>
            <Text style={styles.header}>Sign In Screen</Text>
            <Text style={styles.label}>Name</Text>
            <TextInput 
                style={styles.input}
                autoCapitalize='none'
                autoCorrect={false}
            
            />
            <Text style={styles.label}>Password</Text>
            <TextInput 
                style={styles.input}
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry={true}

            />
            <Button 
                title="Sign In"
                onPress={() => navigation.navigate('Home') }
            /> 
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
        textAlign: 'center', 
        margin: 20
    },
    input: {
        borderColor: 'black', 
        borderWidth: 2,
        padding: 5,  
        marginTop: 10,
        marginHorizontal: 10,  
        marginBottom: 20
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 10
    }
})

export default SignInScreen 