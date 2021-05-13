import container from './configuration/container';
import HttpServer from './server/http-server';

const httpServer = container.get(HttpServer);
httpServer.start();

process.on('SIGINT', () => {
  console.info(
    'Got SIGINT (aka ctrl-c in docker). Graceful shutdown ',
    new Date().toISOString()
  );
  void shutdown();
});

// quit properly on docker stop
process.on('SIGTERM', () => {
  console.info(
    'Got SIGTERM (docker container stop). Graceful shutdown ',
    new Date().toISOString()
  );
  void shutdown();
});

// shut down server
async function shutdown() {
  await httpServer.stop();
  process.exit();
}
