const assert = require('assert');
const app = require('../../src/app');

describe('\'yaan\' service', () => {
  it('registered the service', () => {
    const service = app.service('yaan');

    assert.ok(service, 'Registered the service');
  });
});
