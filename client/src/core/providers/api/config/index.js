import { BASE_URL }  from 'environment';

const getConfig = () => {
  const config = {
    baseUrl: BASE_URL,
  };

  return {
    baseURL: config.baseUrl,
    headers: {},
  };
};

export default getConfig;
