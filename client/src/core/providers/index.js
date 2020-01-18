import axios from 'axios';
import DiaryProvider from './diary';
import LoginProvider from './login';

export const Providers = ({
  action, path, method, params, responseType, timeout = 10000,
}) => {
  const abort = axios.CancelToken.source();
  const cancelTimeOut = setTimeout(
    () => abort.cancel(),
    timeout,
  );

  const variables = {
    path,
    method,
    params,
    responseType,
    cancelToken: abort.token,
  };

  return ({
    SEND_ACTION: () => DiaryProvider.service(variables)
      .then((response) => {
        clearTimeout(cancelTimeOut);
        return response;
      }),
    LOGIN: () => LoginProvider.service(variables)
      .then((response) => {
        clearTimeout(cancelTimeOut);
        return response;
      }),
  }[action]);
};
