export interface IApplicationConfiguration {
  http_server: IHttpServer;
}

export interface IHttpServer {
  port: number;
}

// eslint-disable-next-line node/no-unpublished-require
const configuration: IApplicationConfiguration = require('../../../data/application/default_configuration.json');
export default configuration;
