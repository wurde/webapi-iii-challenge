'use strict'

/**
 * Dependencies
 */

const User = require('../models/User')

/**
 * Define middleware
 */

async function validateUserId(req, res, next) {
  if (req.params.id) {
    let user = await User.getById(req.params.id)

    if (user) {
      req.user = user
    } else {
      res.status(400).json({ error: { message: `No user found for ID '${req.params.id}'.` }})
    }
  }

  next()
}

/**
 * Export middleware
 */

module.exports = validateUserId
