import AsyncStorage from '@react-native-async-storage/async-storage';

// Function to save data
export const storeData = async (key: string, value: string): Promise<void> => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (e) {
        console.error('Failed to save data to AsyncStorage', e);
    }
};

// Function to retrieve data
export const getData = async (key: string): Promise<string | null> => {
    try {
        const value = await AsyncStorage.getItem(key);
        return value; // Value will be null if not found
    } catch (e) {
        console.error('Failed to retrieve data from AsyncStorage', e);
        return null;
    }
};

// Example of storing an object as JSON
export const storeObject = async <T>(key: string, value: T): Promise<void> => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
        console.error('Failed to save object to AsyncStorage', e);
    }
};

// Example of retrieving an object as JSON
export const getObject = async <T>(key: string): Promise<T | null> => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) as T : null;
    } catch (e) {
        console.error('Failed to retrieve object from AsyncStorage', e);
        return null;
    }
};
