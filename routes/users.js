var express = require('express');
const req_modules = require('./req_modules');
const request = require('request');
const cs = require('./cs.js');
var router = express.Router();

var req_data, res_data;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// /users/login
router.get('/login', function(req, res, next) {
  res.render('login');
});

// /users/logout
// 수정 필요 false 안먹음. 비동기 issue
router.get('/logout', function(req, res, next) {
  req.session.logined = false;
  cs.cs_check(req);
  res.redirect('/');
});

// 수정필요.. JSON format이 아니라 unregistered email만 나옴...
// /users/login-local
router.post('/login-local', function(req, res, next) {
  console.log(req.body.email);
  console.log(req.body.password);

  if ((req.body.email.length != 0) && (req.body.password.length != 0)) {
    req_data = {
      email: req.body.email,
      password: req.body.password
    }
    request.post(req_modules.req_post('/api/auth/login/local', req_data),
      function(error, response, body) {
        res_data = JSON.parse(body);
        console.log('---response---');
        // console.log(response);
        console.log(res_data);

        if (res_data.status == 200) {
          req.session.logined = true;
          console.log(req.session.logined);
          res.redirect('/');
        }


      })

  } else {
    res.redirect('/');
  }
});

// /users/register
router.get('/register', function(req, res, next) {
  res.render('register');
});

// /users/register-local
router.post('/register-local', function(req, res, next) {
  console.log(req.body.email);
  console.log(req.body.password);

  req_data = {
    email: req.body.email,
    password: req.body.password,
    nickname: req.body.nickname,
    dob: req.body.dob,
    gender: req.body.gender
  }

  request.post(req_modules.req_post('/api/auth/register/local', req_data),
    function(error, response, body) {
      res_data = JSON.parse(body);
      console.log(res_data);
    });
})

module.exports = router;
