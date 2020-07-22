const router = require('express').Router();
const ErrorResponseController = require('./ErrorResponseController');
const RouteConstant = require('../../constant/Routes');

module.exports = (app) => {
  router.route('/getAllErrorData')
    .get(ErrorResponseController.getAllErrorData);

  router.route('/getErrorDataByCode/:code')
    .get(ErrorResponseController.getErrorDataByCode);

  app.use(
    RouteConstant.GET_ERROR,
    router
  );
};