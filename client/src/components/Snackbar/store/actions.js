import { createAction } from 'redux-actions';
import {
  createType,
} from 'core/utils/reduxAsync';


export const types = {
  SHOW_SNACKBAR: createType('snackbar', 'SHOW_SNACKBAR'),
  HIDE_SNACKBAR: createType('snackbar', 'HIDE_SNACKBAR'),
  DISMISS_SNACKBAR: createType('snackbar', 'DISMISS_SNACKBAR'),
};

export const actions = {
  showSnackbar: createAction(types.SHOW_SNACKBAR),
  hideSnackbar: createAction(types.HIDE_SNACKBAR),
  dismissSnackbar: createAction(types.DISMISS_SNACKBAR),
};
