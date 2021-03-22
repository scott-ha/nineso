var express = require('express');
var router = express.Router();

const req_modules = require('./req_modules');
const testJSON = require('./test.json');
const request = require('request');
const API_rcmd = require('./rcmd.js');

// single product list,
// 1:bed, 2:living, 3:storage
var spl_1, spl_2, spl_3, session, res_data, a;

// initial root
router.get('/', function(req, res, next) {

  console.log('---------------------------');
  // console.log(req.cookies);
  console.log(req.session.logined);
  console.log('---------------------------');
  // spl = testJSON;
  session = req.session.logined;
  console.log(session);

  spl_1 = API_rcmd.rcmd_1();
  spl_2 = API_rcmd.rcmd_2();
  spl_3 = API_rcmd.rcmd_3();

  res.render('index', {
    spl_1: spl_1,
    spl_2: spl_2,
    spl_3: spl_3,
    session: session
  });
});

module.exports = router;
