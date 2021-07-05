import React, { useState, FC } from 'react';
import { ModalInput } from './ModalInput';
import { View, StyleSheet, Button } from 'react-native';
import { colors } from '../utils/colors';

type Props = {
    btnText: string
}

export const ModalController: FC<Props> = ({ btnText }) => {
    const [showModal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!showModal);
    }

    return (
        <View>
            <ModalInput showModal={showModal} toggleModal={toggleModal} />
            <Button title={btnText} onPress={toggleModal} />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginTop: 10,
        borderBottomWidth: 1,
    },
    button: {
        marginTop: 15,
        width: 120,
        backgroundColor: colors.primary,
        borderWidth: 1
    },
    buttonText: {
        alignSelf: 'center',
        fontSize: 18,
        padding: 5,
        fontWeight: 'bold'
    }
})