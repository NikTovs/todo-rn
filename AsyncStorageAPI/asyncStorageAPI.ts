import AsyncStorage from '@react-native-async-storage/async-storage';


export const DEFAULT_KEY = 'TODO_DATA'

export type DataProps = [
    {
        title: string
        key: string | number
    }
]

export const getDataFromStorage = async (key: string = DEFAULT_KEY) => {
    const resVal = await AsyncStorage.getItem(key);

    if (resVal !== null)
        return JSON.parse(resVal);

    return null;
}

export const setDataToStorage = async (data: DataProps, key: string = DEFAULT_KEY) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(data));
    }
    catch (e) {
        console.log(e);
    }
}
