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
    try {
      let post = await Post.getById(req.params.id)

      if (post) {
        res.status(200).json(post)
      } else {
        res.status(404).json({ error: { message: `Post not found for ID '${req.params.id}'.` }})
      }
    } catch (err) {
      res.status(500).json({ error: { message: 'Server error.' }})
    }
  })
  .put(async (req, res) => {
    res.sendStatus(200)
  })
  .delete(async (req, res) => {
    try {
      await Post.remove(req.params.id)
      res.sendStatus(200)
    } catch (err) {
      res.status(500).json({ error: { message: 'Server error.' }})
    }
  })

/**
 * Export router
 */

module.exports = router
