// cookie, session
var c, s, result;

// common function
exports.cs_check = function(req) {
  return new Promise(function(resolve, reject) {
    c = req.cookies;
    s = req.session;

    result = {c,s};
    resolve(result);
  });
}

exports.cs_login = function(req) {
  return new Promise(function(resolve, reject) {
    c = req.cookies;
    s = req.session;
    result = {c,s};
    resolve(result);
  });
}

exports.cs_logout = function(req) {
  return new Promise(function(resolve, reject) {
    c = req.cookies;
    s = req.session;
    result = {c,s};
    resolve(result);
  });
}
