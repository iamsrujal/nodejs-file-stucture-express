const router = require('express').Router();
const UserProfileController = require('./UserProfileController');
const RouteConstant = require('../../constant/Routes');
const Middleware = require('../../cors/middleware').checkToken;
const Validation = require('../../validation/UserValidation')

module.exports = (app) => {
  router.route('/create')
    .post(
      Validation.create(),
      UserProfileController.createUser
    );

  router.route('/update')
    .post(
      Validation.update(),
      UserProfileController.updateUser
    );

  app.use(
    RouteConstant.USER,
    Middleware,
    router
  );
};