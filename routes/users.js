var express = require('express');
const req_modules = require('./req_modules');
const request = require('request');
var router = express.Router();

var req_data, res_data;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/test', function(req, res, next) {
  res.redirect('/');
});

// 수정필요.. JSON format이 아니라 unregistered email만 나옴...
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

        if(res_data.status==200) {
          req.session.logined = true;
          console.log(req.session.logined);
          res.redirect('/');
        }


      })

  }
  else {
    res.redirect('/');
  }
});

router.get('/register', function(req, res, next) {
  res.render('register');
});

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

  request.post(req_modules.req_post('/api/auth/register/local', req_data), function(error, response, body) {
    res_data = JSON.parse(body);
    console.log(res_data);
  });
})

module.exports = router;
