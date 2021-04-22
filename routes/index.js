var express = require('express');
var router = express.Router();

const req_modules = require('./req_modules');
const testJSON = require('./test.json');
const request = require('request');
const API_rcmd = require('./rcmd.js');
const cs = require('./cs.js');

// single product list,
// 1:bed, 2:living, 3:storage
var spl_1, spl_2, spl_3, session, res_data, c_id, cs_data;

// initial root
router.get('/', async function(req, res, next) {

  console.log('---------------------------');
  cs_data = await cs.cs_check(req);
  console.log(cs_data);
  console.log('---------------------------');
  session = req.session.logined;
  console.log(session);

  spl_1 = await API_rcmd.rcmd_1();
  spl_2 = await API_rcmd.rcmd_2();
  spl_3 = await API_rcmd.rcmd_3();

  res.render('index', {
    spl_1: spl_1,
    spl_2: spl_2,
    spl_3: spl_3,
    session: session
  });
});

module.exports = router;
