const getConfig = () => {
  const config = {
    baseUrl: 'http://sicop.homologacao.am.gov.br/diario-obras-mobile/',
  };

  return {
    baseURL: config.baseUrl,
    headers: {},
  };
};

export default getConfig;
