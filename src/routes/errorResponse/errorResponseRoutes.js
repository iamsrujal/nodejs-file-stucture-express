const router = require('express').Router();
const errorResponseService = require('./errorResponseService');
const RouteConstant = require('../../constant/Routes');
const Middleware = require('../../cors/middleware').checkToken;
const Validation = require('../../validation/user')

module.exports = (app) => {
  router.route('/getAllErrorData')
    .get(errorResponseService.getAllErrorData);

  router.route('/getErrorDataByCode/:code')
    .get(errorResponseService.getErrorDataByCode);

  app.use(
    RouteConstant.GET_ERROR,
    router
  );
};