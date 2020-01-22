import { createAsyncTypes, createAsyncActions } from 'core/utils/reduxAsync';

export const types = {
  SET_THEME: createAsyncTypes('theme', 'SET_THEME'),
};

export const actions = {
  setTheme: createAsyncActions(types.SET_THEME),
};
