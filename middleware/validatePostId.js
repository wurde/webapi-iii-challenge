'use strict'

/**
 * Dependencies
 */

const Post = require('../models/Post')

/**
 * Define middleware
 */

async function validatePostId(req, res, next) {
  if (req.params.id) {
    let post = await Post.getById(req.params.id)

    if (post) {
      req.post = post
    } else {
      res.status(400).json({ error: { message: `No post found for ID '${req.params.id}'.` }})
    }
  }

  next()
}

/**
 * Export middleware
 */

module.exports = validatePostId
