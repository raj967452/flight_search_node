
const app = require('./app');
const config = require('./config/config');
const logger = require('./config/logger');


let server;
// This displays message that the server running and listening to specified port
server = app.listen(config.port, () => {
  logger.info(`Listening to port ${config.port}`);
}); //Line 6

const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  logger.info('SIGTERM received');
  if (server) {
    server.close();
  }
});


