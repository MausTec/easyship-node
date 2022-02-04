const Method = require('./Method');

module.exports = {
  create: Method({
    method: 'POST',
  }),

  list: Method({
    method: 'GET',
    path: '',
  }),

  // @deprecated - use .get
  retrieve: Method({
    method: 'GET',
    path: '{id}',
    urlParams: ['id'],
  }),

  get: Method({
    method: 'GET',
    path: '{id}',
    urlParams: ['id'],
  }),

  update: Method({
    method: 'PATCH',
    path: '{id}',
    urlParams: ['id'],
  }),

  // Avoid 'delete' keyword in JS
  // @deprecated - use .destroy
  del: Method({
    method: 'DELETE',
    path: '{id}',
    urlParams: ['id'],
  }),

  destroy: Method({
    method: 'DELETE',
    path: '{id}',
    urlParams: ['id'],
  }),
};
