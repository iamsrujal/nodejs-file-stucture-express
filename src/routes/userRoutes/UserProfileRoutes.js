const router = require('express').Router();
const UserProfileService = require('./UserProfileService');
const RouteConstant = require('../../constant/Routes');
const Middleware = require('../../cors/middleware').checkToken;
const Validation = require('../../validation/user')

module.exports = (app) => {
  router.route('/create')
    .post(
      Validation.create(),
      UserProfileService.createUser
    );

    router.route('/update')
    .post(
      Validation.update(),
      UserProfileService.updateUser
    );

  app.use(
    RouteConstant.USER,
    Middleware,
    router
  );
};