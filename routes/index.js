var express = require('express');
var router = express.Router();

const req_modules = require('./req_modules');
const testJSON = require('./test.json');

// single product list
var spl, session;

// initial root
router.get('/', function(req, res, next) {

  console.log('---------------------------');
  // console.log(req.cookies);
  console.log(req.session.logined);
  console.log('---------------------------');
  spl = testJSON;
  session = req.session.logined;

  console.log(session);
  res.render('index', {
    spl: spl,
    session: session
  });
  // res.redirect('/users/login');

});


module.exports = router;
