import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, FlatList, StyleSheet } from 'react-native';
import { ModalController } from '../components/ModalController';
import { TodoItem } from '../components/TodoItem';
import { getDataFromStorage, DEFAULT_KEY, DataProps } from '../AsyncStorageAPI/asyncStorageAPI'

export const TasksScreen = () => {

    const [todos, setTodos] = useState<DataProps | null>();

    useEffect(() => {
        const promise = getDataFromStorage(DEFAULT_KEY);
        promise.then((value) => {
            setTodos(value);
        })
    }, [])


    const showTodos = () => {
        if (todos !== null) {
            return (
                <FlatList
                    data={todos}
                    renderItem={
                        ({ item }) => (
                            <TodoItem title={item.title} />
                        )
                    }
                />
            )
        }
        else {
            return (
                <Text>
                    There is no todo
                </Text>
            )
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            {showTodos()}
            <ModalController btnText='add todo' />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 15
    }
})