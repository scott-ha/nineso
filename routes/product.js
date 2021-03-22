var express = require('express');
var router = express.Router();

const testJSON = require('./test.json');

// single product list, product id
var spl, pi;

// /product/:id
// URL param : medium category
// URL param : req.params.name
// Query param : req.query.name

router.get('/:id', function(req, res, next) {

  console.log(req.params.id);
  pi = req.params.id
  console.log(pi);
  console.log(pi.length);

  if (pi.length == 3) {
    res.render('product/product-medium', { spl: spl });
  } else if (pi.length == 5) {
    res.render('product/product-small');
  } else {
    res.redirect('/');
  }

});

// product/small
router.get('/small', function (req, res, next) {
  res.render('product/product-small');
})

module.exports = router;
