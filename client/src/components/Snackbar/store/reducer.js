import { handleActions } from 'redux-actions';
import { types } from './actions';

const initialState = {
  message: null,
  duration: 4000,
  visible: false,
  dismiss: false,
};

export default handleActions(
  {
    [types.SHOW_SNACKBAR]: (state, { payload }) => ({
      ...state,
      message: payload.message === undefined ? payload : payload.message,
      duration: payload.duration === undefined ? initialState.duration : payload.duration,
      visible: true,
      dismiss: false,
    }),
    [types.HIDE_SNACKBAR]: state => ({
      ...state,
      message: null,
      duration: null,
      visible: false,
      dismiss: false,
    }),
    [types.DISMISS_SNACKBAR]: state => ({
      ...state,
      message: null,
      duration: null,
      visible: false,
      dismiss: true,
    }),
  },
  initialState,
);

export const selectors = {
  getMessage: state => state.snackbars.message,
  getDuration: state => state.snackbars.duration,
  getVisible: state => state.snackbars.visible,
  getDismiss: state => state.snackbars.dismiss,
};
