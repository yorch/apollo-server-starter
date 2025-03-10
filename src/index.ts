import { logger } from './logger';
import { server } from './server';

try {
  const { url } = await server.listen();
  logger.info(`🚀 Server ready at ${url}`);
} catch (error) {
  logger.error(error, 'Error starting server');
}
