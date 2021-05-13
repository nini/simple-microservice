import * as Koa from 'koa';
import Router from './router';
import IRestController from '../controller/i-rest-controller';
import {inject} from 'aurelia-dependency-injection';
import HealthCheckController from '../controller/health-check-controller';

@inject(Router, HealthCheckController)
export default class ApiApplication extends Koa {
  constructor(
    private readonly router: Router,
    ...controllers: IRestController[]
  ) {
    super();
    controllers.map(c => c.registerController(router));
  }

  public start() {
    this.use(this.router.routes());
  }
}
