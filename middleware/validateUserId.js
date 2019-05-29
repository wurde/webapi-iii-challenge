'use strict'

/**
 * Define middleware
 */

function validateUserId(req, res, next) {
  if (req.params.id) {
    let user = getById(req.params.id)

    if (user) {
      req.user = user
    } else {
      res.status(400).json({ error: { message: `No user found for ID '${req.params.id}'` }})
    }
  }

  next()
}

/**
 * Export middleware
 */

module.exports = validateUserId
