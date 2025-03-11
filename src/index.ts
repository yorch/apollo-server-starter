import { startStandaloneServer } from '@apollo/server/standalone';

import { config } from './config';
import { logger } from './logger';
import { server } from './server';

const { port } = config;

try {
  const { url } = await startStandaloneServer(server, { listen: { port } });
  logger.info(`🚀 Server ready at ${url}`);
} catch (error) {
  logger.error(error, 'Error starting server');
}
