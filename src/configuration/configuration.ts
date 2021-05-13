import {Value, values as v} from 'validate-value';

export interface IApplicationConfiguration {
  http_server: IHttpServer;
}

export interface IHttpServer {
  port: number;
}

const configurationValidator = new Value({
  type: v.object,
  properties: {
    http_server: {
      type: v.object,
      properties: {
        port: {
          type: v.number,
        },
      },
      required: ['port'],
      additionalProperties: false,
    },
  },
  required: ['http_server'],
  additionalProperties: false,
});

// eslint-disable-next-line node/no-unpublished-require
const configuration: IApplicationConfiguration = require('../../../data/application/default_configuration.json');

// throws when validation fails
configurationValidator.validate(configuration);
export default configuration;
