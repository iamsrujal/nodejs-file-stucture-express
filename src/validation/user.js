const { body, check } = require('express-validator');

module.exports = {
  create: () => {
    return [
      body('title', 'Mandatory Parameter Missing.').exists(),
      // body('url', 'Mandatory Parameter Missing.').exists(),
    ]
  },

  update: () => {
    return [
      check('field1').not().isEmpty().withMessage('field1 Mandatory Parameter Missing.'),
      check('field2').not().isEmpty().withMessage('field2 - Mandatory Parameter Missing.'),
    ]
  }
}