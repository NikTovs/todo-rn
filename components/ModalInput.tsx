import React, { FC } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Button } from '../uikit/Button';
import Modal from 'react-native-modal';
import { colors } from '../utils/colors';

type Props = {
    showModal: boolean
    toggleModal: () => void
}

export const ModalInput: FC<Props> = ({ showModal, toggleModal }) => {


    return (
        <Modal isVisible={showModal}
            onBackdropPress={toggleModal}>
            <View style={styles.container}>
                <Text style={styles.title}>Create ToDo</Text>
                <TextInput placeholder='Type title name here' style={styles.input} />
                <Button title='add' onPress={toggleModal} />
                <Button title='cancel' onPress={toggleModal} />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        position: 'absolute',
        top: 120,
        width: 260,
        height: 260,
        alignSelf: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 15,
        borderColor: colors.secondary,
        backgroundColor: 'white'
    },
    title: {
        marginTop: 10,
        fontSize: 22,
        fontWeight: 'bold'
    },
    input: {
        marginTop: 10,
        borderBottomWidth: 1,
    }
})