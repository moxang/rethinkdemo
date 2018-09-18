const assert = require('assert');
const app = require('../../src/app');

describe('\'rethink\' service', () => {
  it('registered the service', () => {
    const service = app.service('rethink');

    assert.ok(service, 'Registered the service');
  });
});
