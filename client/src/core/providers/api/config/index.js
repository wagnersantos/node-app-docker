const getConfig = () => {
  const config = {
    baseUrl: 'http://localhost:3002/api',
  };

  return {
    baseURL: config.baseUrl,
    headers: {},
  };
};

export default getConfig;
