# Easyship Node.js API wrapper
[![npm version](https://badge.fury.io/js/easyship.svg)](https://badge.fury.io/js/easyship)
[![Build Status](https://travis-ci.org/dplewis/easyship-node.svg?branch=add-travis-ci)](https://travis-ci.org/dplewis/easyship-node)

You will need to [register for a Easyship account](https://easyship.com/) to use the Easyship API. It's free to sign up, free to use the API. Only pay to print a live label, test labels are free.

## Installation:
You can install this package by running the following command:
```shell
  npm install easyship
```

## Usage:

Initialize your `easyship` instance using your `API Access Token` provided to you on the `API` page in the Easyship Dashboard.

```js
  const easyship = require('easyship')('<ACCESS_TOKEN>');
```
The snippet below demonstrates how to create rate objects. Check (examples.js) for more detailed examples.

```js
  const easyship = require('easyship')('<ACCESS_TOKEN>');

  easyship.rate.create({
    origin_postal_code: '60605',
    destination_country_alpha2: 'US',
    destination_postal_code: '60605',
    taxes_duties_paid_by: 'Sender',
    is_insured: false,
    apply_shipping_rules: true,
    items: [{
      actual_weight: 1.2,
      height: 10,
      width: 15,
      length: 20,
      category: 'mobiles',
      declared_currency: 'SGD',
      declared_customs_value: 100,
    }],
  }).then(({ rates }) => {
    console.log(rates);
  });
```

## Method Overview

## [Shipping API](https://developers.easyship.com/reference)

HTTP Method | Endpoint                                      | Methods
----------- | --------------------------------------------- | ----------------------------
POST        | /rate/v1/rates                                | easyship.rate.create()
POST        | /shipment/v1/shipments                        | easyship.shipment.create()
POST        | /shipment/v1/shipments/create_and_buy_label   | easyship.shipment.createLabel()
PATCH       | /shipment/v1/shipments/{easyship_shipment_id} | easyship.shipment.update()
GET         | /shipment/v1/shipments/{easyship_shipment_id} | easyship.shipment.retrieve()
GET         | /shipment/v1/shipments                        | easyship.shipment.list()
DELETE      | /shipment/v1/shipments/{easyship_shipment_id} | easyship.shipment.del()
PATCH       | /shipment/v1/shipments/update_warehouse_state | easyship.shipment.updateWarehouse()
POST        | /label/v1/labels                              | easyship.label.create()
GET         | /pickup/v1/pickup_slots/{courier_id}          | easyship.pickup.retrieve()
POST        | /pickup/v1/pickups                            | easyship.pickup.create()
POST        | /pickup/v1/direct_handover                    | easyship.pickup.directHandover()
GET         | /track/v1/status                              | easyship.track.status()
GET         | /track/v1/checkpoints                         | easyship.track.checkpoints()
GET         | /reference/v1/categories                      | easyship.categories.list()

## Credits

This project was forked from [stripe-node](https://github.com/stripe/stripe-node).

## Documentation

Please see [https://developers.easyship.com/reference](https://developers.easyship.com/reference) for up-to-date documentation.
