// Initializes the `yaan` service on path `/yaan`
const createService = require('feathers-nedb');
const createModel = require('../../models/yaan.model');
const hooks = require('./yaan.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/yaan', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('yaan');

  service.hooks(hooks);
};
