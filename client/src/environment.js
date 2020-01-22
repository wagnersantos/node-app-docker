import { Platform } from 'react-native';

export const IP = '172.23.225.137';

export const isIos = Platform.OS === 'ios';

export const base = isIos ? 'localhost' : IP;

export const BASE_URL= `http://${base}:3002/api`
