import axios from 'axios';
import defaultsDeep from 'lodash/defaultsDeep';
import { validateRequest, onResponseError } from 'core/providers/interceptor';
import getConfig from './config';

const config = getConfig();
const BaseApi = axios.create(config);

BaseApi.interceptors.request.use(validateRequest);
BaseApi.interceptors.response.use(null, onResponseError);

BaseApi.request = (path, options) => {
  const mergedOptions = defaultsDeep(options, getConfig());

  return BaseApi(path, mergedOptions).then(resp => resp.data);
};

export default BaseApi;
