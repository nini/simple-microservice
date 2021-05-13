import IServer from './i-server';
import {inject} from 'aurelia-dependency-injection';
import ApiApplication from './api-application';
import configuration, {IHttpServer} from '../configuration/configuration';
import LoggerService from '../service/logger-service';

export default class HttpServer implements IServer {
  constructor(
    @inject(ApiApplication) private readonly app: ApiApplication,
    @inject(configuration.http_server) private readonly config: IHttpServer,
    @inject(LoggerService) private readonly logger: LoggerService
  ) {
  }

  start(): void {
    this.app.start();
    this.app.listen(this.config.port);
    this.logger.log('Application listening on port ' + this.config.port);
  }

  stop(): void {
  }
}
