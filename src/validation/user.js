const { body, check } = require('express-validator');

module.exports = {
  create: () => {
    return [
      check("name", "Name is required!").not().isEmpty(),
      // body('url', 'Mandatory Parameter Missing.').exists(),
    ]
  },

  update: () => {
    return [
      check('name', 'Name is Mandatory Parameter Missing.').not().isEmpty()
    ]
  }
}