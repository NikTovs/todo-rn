import React, { FC } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { colors } from '../utils/colors'

type Props = {
    title: string
    onPress: () => any
}

export const Button : FC<Props> = ({ title, onPress }) => {

    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop: 15,
        width: 120,
        backgroundColor: colors.secondary,
        borderWidth: 1,
        borderRadius: 5
    },
    buttonText: {
        alignSelf: 'center',
        fontSize: 18,
        padding: 5,
        fontWeight: 'bold'
    }
})