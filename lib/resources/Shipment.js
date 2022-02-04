const method = require('../Method');

module.exports = require('../Resource').extend({
  path: '/v2/shipments',
  operations: ['create', 'destroy', 'list', 'get', 'update'],
  createAndBuyLabel: method({
    method: 'POST',
    path: '/shipment/v1/shipments/create_and_buy_label',
  }),
  updateWarehouseState: method({
    method: 'PATCH',
    path: 'warehouse_state',
  }),
});
