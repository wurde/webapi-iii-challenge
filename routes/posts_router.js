'use strict'

/**
 * Dependencies
 */


const express = require('express')
const Post = require('../models/Post')

/**
 * Define router
 */

const router = express.Router()

/**
 * Routes
 */

// GET /posts
router.route('/')
  .get(async (req, res) => {
    try {
      let posts = await Post.get()

      res.status(200).json(posts)
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error during posts fetch.' }})
    }
  })

// GET,PUT,DELETE /posts/:id
router.route('/:id')
  .get(async (req, res) => {
    res.sendStatus(200)
  })
  .put(async (req, res) => {
    res.sendStatus(200)
  })
  .delete(async (req, res) => {
    res.sendStatus(200)
  })

/**
 * Export router
 */

module.exports = router
