const assert = require('assert');
const app = require('../../src/app');

describe('\'new\' service', () => {
  it('registered the service', () => {
    const service = app.service('new');

    assert.ok(service, 'Registered the service');
  });
});
