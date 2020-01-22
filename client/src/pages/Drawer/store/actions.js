import { createAsyncTypes, createAsyncActions } from 'core/utils/reduxAsync';

export const types = {
  FETCH_THEME: createAsyncTypes('theme', 'FETCH_THEME'),
  SET_THEME: createAsyncTypes('theme', 'SET_THEME'),
};

export const actions = {
  fetchTheme: createAsyncActions(types.FETCH_THEME),
  setTheme: createAsyncActions(types.SET_THEME),
};
