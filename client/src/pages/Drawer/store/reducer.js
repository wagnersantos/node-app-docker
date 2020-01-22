import { handleActions } from 'redux-actions';
import { types } from './actions';

const initialState = {
  isDark: true,
};

export default handleActions(
  {
    [types.SET_THEME.SUCCESS]: (state, { payload }) => ({
      ...state,
      isDark: payload.isDark,
    }),
  },
  initialState,
);

export const selectors = {
  getTheme: state => state.theme.isDark,
};
