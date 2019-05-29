'use strict'

/**
 * Define middleware
 */

function logger(req, res, next) {
  console.log(`${new Date()} :: ${req.method.toUpperCase()} ${req.originalUrl}`)
  next()
}

/**
 * Export middleware
 */

module.exports = logger
