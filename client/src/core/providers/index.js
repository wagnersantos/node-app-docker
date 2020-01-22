import axios from 'axios';

import Api from './api';

export default {
  service: ({
    params,
    path,
    method,
    responseType,
    headers,
    timeout = 10000,
  }) => {
    const abort = axios.CancelToken.source();
    const cancelTimeOut = setTimeout(() => abort.cancel(), timeout);

    return Api.request(path, {
      method,
      data: params,
      responseType,
      cancelToken: abort.token,
      headers,
    }).then(response => {
      clearTimeout(cancelTimeOut);
      return response;
    });
  },
};
