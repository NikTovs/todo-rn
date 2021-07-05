import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';

type Props = {
    title: string
}

export const TodoItem: FC<Props>  = ({title}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 15,
        height: 35,
        margin: 10,
        borderColor: colors.secondary
    },
    title: {
        padding: 5,
        alignSelf: 'center',
        fontWeight: '500',
        color: colors.primary
    }  
})