import React from 'react'
import { SafeAreaView, Button, Text, StyleSheet } from 'react-native'
import { colors } from '../utils/colors'

export const WelcomeScreen = ({navigation} : any) => {

    return(
        <SafeAreaView style={style.container}>
            <Text style={style.title}>Welcome</Text>
            <Button title='start' onPress={() => navigation.navigate('Todos')}/> 
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 15,
        alignContent: 'center',
    },
    title: {
        alignSelf: 'center',
        fontSize: 26,
        fontWeight: 'bold',
        color: colors.primary
    }
})