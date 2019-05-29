'use strict'

/**
 * Define middleware
 */

function logger(req, res, next) {
  next()
}

/**
 * Export middleware
 */

module.exports = logger
