'use strict'

/**
 * Define middleware
 */

function validatePost(req, res, next) {
  if (!req.body) {
    res.status(400).json({ error: { message: `Missing required post data.` }})
  }

  if (!req.body.text) {
    res.status(400).json({ error: { message: `Missing required text field.` }})
  }

  next()
}

/**
 * Export middleware
 */

module.exports = validatePost
