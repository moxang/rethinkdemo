
module.exports = {
  before: {
    all: [hook=>all(hook)],
    find: [],
    get: [],
    create: [hook=>create(hook)],
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
function all(hook){
  console.log('all called')
}
function create(hook){
  console.log('create')
  console.log(hook.data)
}
