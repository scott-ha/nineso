var express = require('express');
var router = express.Router();

const testJSON = require('./test.json');

// single product list, product id
var spl, cid;

// URL param : req.params.name
// Query param : req.query.name

// /product/:cid
router.get('/:cid', function(req, res, next) {
  // pruduct category id | To medium/small
  cid = req.params.cid
  session = req.session.logined;
  console.log(session);
  // need to be modified
  if (cid.length == 3) {
    res.render('product/product-medium', {
      session: session
    });
  } else if (cid.length == 5) {
    res.render('product/product-small', {
      session: session
    });
  } else {
    res.redirect('/');
  }
});

// /product/:cid/detail?pid=&o_url=
// url+query params /:cid/detail?pid
router.get('/:cid/detail', function(req, res, next) {
  console.log('======== /product/:cid/detail?pid=&o_url ==========');
  console.log('category id : ', req.params.cid);
  console.log('product id : ', req.query.pid);
  console.log('original url : ', req.query.o_url);
  console.log('==================================================');
  session = req.session.logined;
  o_url = req.query.o_url;
  res.render('product/product-detail', {
    session: session,
    o_url: o_url
  });
});

module.exports = router;
