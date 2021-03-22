const request = require('request');
const req_modules = require('./req_modules');

var res_data;

// bed_rcmd
exports.rcmd_1 = function() {
  request.get(req_modules.req_get('/api/rcmd/1'), function(error, response, body) {
    res_data = JSON.parse(body);
    res_data = res_data.data;

    // price formatting
    for (var i = 0; i < res_data.length; i++) {
      res_data[i].sales_price = res_data[i].sales_price.format();
    }

  });
  return res_data;
}

// living_rcmd
exports.rcmd_2 = function() {
  request.get(req_modules.req_get('/api/rcmd/2'), function(error, response, body) {
    res_data = JSON.parse(body);
    res_data = res_data.data;

    // price formatting
    for (var i = 0; i < res_data.length; i++) {
      res_data[i].sales_price = res_data[i].sales_price.format();
    }

  });
  return res_data;
}

// storage_rcmd
exports.rcmd_3 = function() {
  request.get(req_modules.req_get('/api/rcmd/3'), function(error, response, body) {
    res_data = JSON.parse(body);
    res_data = res_data.data;

    // price formatting
    for (var i = 0; i < res_data.length; i++) {
      res_data[i].sales_price = res_data[i].sales_price.format();
    }

  });
  return res_data;
}


// price formatting
Number.prototype.format = function() {
  if (this == 0) return 0;

  var reg = /(^[+-]?\d+)(\d{3})/;
  var n = (this + '');

  while (reg.test(n)) n = n.replace(reg, '$1' + ',' + '$2');

  return n;
};
