import IRestController from './i-rest-controller';
import Router from '../server/router';
import {Context} from 'koa';

export default class HealthCheckController implements IRestController {
  registerController(router: Router) {
    router.get('/system/health-check', this.healthCheck.bind(this));
  }

  healthCheck(ctx: Context) {
    ctx.status = 200;
  }
}
