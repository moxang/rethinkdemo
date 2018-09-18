

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [hook=>save(hook)],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
  
};
function save(hook){
  console.log('save')
}
