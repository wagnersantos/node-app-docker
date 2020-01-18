import Api from './api';

export default {
  service: ({
    params, path, method, responseType, cancelToken, headers,
  }) => Api.request(`/obras/${path}`, {
    method, data: params, responseType, cancelToken, headers,
  }),
};
