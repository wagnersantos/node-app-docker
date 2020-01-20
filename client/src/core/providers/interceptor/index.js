import axios from 'axios';
// import store from 'store';
// import { actions } from 'components/Snackbar/store/actions';

export const onResponseError = error => {
  const errorHasResponse = error && error.response;

  // const { showSnackbar } = actions;
  // const setToaster = msg => store.dispatch(showSnackbar(msg));
  // const message = 'Erro de servidor, Tente novamente mais tarde!';

  if (errorHasResponse && error.response.status === 422) {
    // setToaster(error.response.data.message);
  }

  if (
    errorHasResponse &&
    (error.response.status === 401 || error.response.status === 403)
  ) {
    // setToaster(error.response.data.message);
  }

  if (
    errorHasResponse &&
    error.response.status !== 401 &&
    error.response.status !== 403 &&
    error.response.status !== 422
  ) {
    // setToaster(message);
  }

  if (axios.isCancel(error)) {
    // setToaster(message);
  }

  return Promise.reject(error);
};

export const validateRequest = config => {
  return config;
};
