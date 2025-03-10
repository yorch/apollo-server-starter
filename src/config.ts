import 'dotenv/config';

import getenv from 'getenv';

// Because `getenv` is a CommonJS module, we have to use the `default` export
const environmentVariables = getenv.multi({
  nodeEnv: ['NODE_ENV', 'development', 'string'],
  logLevel: ['LOG_LEVEL', 'info', 'string'],
  port: ['PORT', 4000, 'int'],
});

export const config = {
  ...environmentVariables,
  isProduction: environmentVariables.nodeEnv === 'production',
};
