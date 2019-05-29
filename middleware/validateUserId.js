'use strict'

/**
 * Define middleware
 */

function validateUserId(req, res, next) {
  if (req.params.id) {
    // user = 
    // req.user = user
  }

  next()
}

/**
 * Export middleware
 */

module.exports = validateUserId
