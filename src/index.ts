import { server } from './server';

try {
  const { url } = await server.listen();
  console.log(`🚀 Server ready at ${url}`);
} catch (error) {
  const errorMessage = error instanceof Error ? error.message : String(error);
  console.error(`Error starting server: ${errorMessage}`);
}
