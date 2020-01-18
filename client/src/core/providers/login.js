import Api from './api';

export default {
  service: ({
    params, path, method, responseType, cancelToken,
  }) => Api.request(path, {
    method, data: params, responseType, cancelToken,
  }),
};
