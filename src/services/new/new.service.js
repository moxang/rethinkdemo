// Initializes the `new` service on path `/new`
const createService = require('feathers-nedb');
const createModel = require('../../models/new.model');
const hooks = require('./new.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/new', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('new');

  service.hooks(hooks);
};
