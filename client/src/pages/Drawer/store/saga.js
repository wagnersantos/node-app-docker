import { call, put, all, takeLatest } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';

import { actions, types } from './actions';

export function* loadTheme() {
  try {
    const value = yield AsyncStorage.getItem('@theme');
    if (value !== null) {
      const payload = JSON.parse(value);
      yield put(actions.setTheme.receive(payload));
    }
  } catch (error) {
    const message = error.response?.data?.message;
    yield put(actions.fetchTheme.error(message));
  }
}

export function* setTheme({ payload }) {
  try {
    yield AsyncStorage.setItem('@theme', JSON.stringify(payload));
    yield put(actions.setTheme.receive(payload));
  } catch (error) {
    const message = error.response?.data?.message;
    yield put(actions.setTheme.error(message));
  }
}

export default function* root() {
  yield all([
    takeLatest(types.FETCH_THEME.REQUEST, loadTheme),
    takeLatest(types.SET_THEME.REQUEST, setTheme),
  ]);
}
