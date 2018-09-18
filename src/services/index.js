const message = require('./message/message.service.js');
const yaan = require('./yaan/yaan.service.js');
const rethink = require('./rethink/rethink.service.js');
// const new = require('./new/new.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(message);
  // app.configure(new);
  app.configure(yaan);
  app.configure(rethink);
};
