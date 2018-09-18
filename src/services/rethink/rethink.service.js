// Initializes the `rethink` service on path `/rethink`
const createService = require('feathers-rethinkdb');
const hooks = require('./rethink.hooks');

module.exports = function (app) {
  const Model = app.get('rethinkdbClient');
  const paginate = app.get('paginate');

  const options = {
    name: 'rethink',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/rethink', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('rethink');

  service.hooks(hooks);
};
