import prodConfig from './config.prod';
import devConfig from './config.dev';

const getEnvType = () => {
  try {
    const envType = process.env.NODE_ENV;
    return envType;
  } catch (err) {
    return 'development';
  }
};

const getConfig = (envType) => {
  switch (envType) {
    case 'production':
      return prodConfig;
    case 'development':
    default:
      return devConfig;
  }
};

const envType = getEnvType();
const config = getConfig(envType);

export {
  envType,
  config
};
