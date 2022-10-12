import AsyncStorage from '@react-native-async-storage/async-storage';
import {storageConfig} from '../Config/Storage';

export const getJsonFromStorage = async (name: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(storageConfig.key + name);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    return false;
  }
};

export const saveJsonToStorage = async (name: string, value: unknown) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(storageConfig.key + name, jsonValue);
  } catch (e) {
    throw 'could_not_save';
  }
};
