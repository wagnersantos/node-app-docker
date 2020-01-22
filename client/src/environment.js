import { Platform } from 'react-native';

const isIos = Platform.OS === 'ios';
const host = isIos ? 'localhost' : '172.23.225.137';

export const BASE_URL= `http://${host}:3002/api`
