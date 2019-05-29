'use strict'

/**
 * Define middleware
 */

function validateUser(req, res, next) {
  if (!req.body) {
    res.status(400).json({ error: { message: `Missing required user data.` }})
  }

  if (!req.body.name) {
    res.status(400).json({ error: { message: `Missing required name field.` }})
  }

  next()
}

/**
 * Export middleware
 */

module.exports = validateUser
