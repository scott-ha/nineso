const request = require('request');
const req_modules = require('./req_modules');

var res_data_1, res_data_2, res_data_3;

// bed_rcmd
exports.rcmd_1 = function() {
  return new Promise(function(resolve, reject) {
    request.get(req_modules.req_get('/api/rcmd/1'),
      function(error, response, body) {
        if (error) {
          reject(error);
        } else {
          res_data_1 = JSON.parse(body);
          res_data_1 = res_data_1.data;

          // price formatting
          for (var i = 0; i < res_data_1.length; i++) {
            res_data_1[i].sales_price = res_data_1[i].sales_price.format();
          }

          resolve(res_data_1)
        }
      });
  });
}

// living_rcmd
exports.rcmd_2 = function() {
  return new Promise(function(resolve, reject) {
    request.get(req_modules.req_get('/api/rcmd/2'),
      function(error, response, body) {
        if (error) {
          reject(error);
        } else {
          res_data_2 = JSON.parse(body);
          res_data_2 = res_data_2.data;

          // price formatting
          for (var i = 0; i < res_data_2.length; i++) {
            res_data_2[i].sales_price = res_data_2[i].sales_price.format();
          }
          resolve(res_data_2)
        }
      });
  });
}

// storage_rcmd
exports.rcmd_3 = function() {
  return new Promise(function(resolve, reject) {
    request.get(req_modules.req_get('/api/rcmd/3'),
      function(error, response, body) {
        if (error) {
          reject(error);
        } else {
          res_data_3 = JSON.parse(body);
          res_data_3 = res_data_3.data;

          // price formatting
          for (var i = 0; i < res_data_3.length; i++) {
            res_data_3[i].sales_price = res_data_3[i].sales_price.format();
          }
          resolve(res_data_3)
        }
      });
  });
}
exports.prds_10101 = function() {
  return new Promise(function(resolve, reject) {
    request.get(req_modules.req_get('/api/prds/10101'),
      function(error, response, body) {
        if (error) {
          reject(error);
        } else {
          res_data = JSON.parse(body);
          res_data = res_data.data;

          // price formatting
          for (var i = 0; i < res_data.length; i++) {
            res_data[i].sales_price = res_data[i].sales_price.format();
          }
          resolve(res_data)
        }
      });
  });
}


// price formatting
Number.prototype.format = function() {
  if (this == 0) return 0;

  var reg = /(^[+-]?\d+)(\d{3})/;
  var n = (this + '');

  while (reg.test(n)) n = n.replace(reg, '$1' + ',' + '$2');

  return n;
};
