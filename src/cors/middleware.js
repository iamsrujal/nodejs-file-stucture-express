let jwt = require('jsonwebtoken');
const reqResponse = require('./responseHandler');

module.exports = {
  checkToken
}

function checkToken(req, res, next) {
  let token = req.headers['x-access-token'] || req.headers['authorization'];
  if (token) {
    let key = 'secret'
    jwt.verify(token, key, {
      ignoreExpiration: true
    }, (err, decoded) => {
      if (err) {
        return res.status(414).send(reqResponse.errorResponse(414));
      } else {
        if (key === 'secret') {
          decoded.isAdminUser = false;
        } else {
          decoded.isAdminUser = true;
        }
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(415).send(reqResponse.errorResponse(415));
  }

}
