import Router from '../server/router';

export default interface IRestController {
  registerController(router: Router): void;
}
