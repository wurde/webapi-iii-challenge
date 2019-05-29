'use strict'

/**
 * Dependencies
 */


const express = require('express')
const User = require('../models/User')
const Post = require('../models/Post')

/**
 * Define router
 */

const router = express.Router()

/**
 * Routes
 */

// GET,POST /users
router.route('/')
  .get(async (req, res) => {
    try {
      let users = await User.get()
      res.status(200).json(users)
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error during users fetch.' }})
    }
  })
  .post(async (req, res) => {
    if (!req.body) {
      res.status(400).json({ error: { message: 'Missing form data.' }})
    }
    if (!req.body.name) {
      res.status(400).json({ error: { message: 'Missing name value.' }})
    }

    try {
      let user = await User.insert({ name: req.body.name })
      res.status(201).json(user)
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error.' }})
    }
  })

// GET,PUT,DELETE /users/:id
router.route('/:id')
  .get(async (req, res) => {
    try {
      let user = await User.getById(req.params.id)

      if (user) {
        res.status(200).json(user)
      } else {
        res.status(404).json({ error: { message: `User not found for ID '${req.params.id}'.` }})
      }
    } catch (err) {
      res.status(500).json({ error: { message: 'Server error.' }})
    }
  })
  .put(async (req, res) => {
    try {
      let user = await User.getById(req.params.id)

      if (user) {
        await User.update(req.params.id, { name: req.body.name })
        res.sendStatus(200)
      } else {
        res.status(404).json({ error: { message: `User not found for ID '${req.params.id}'.` }})
      }
    } catch (err) {
      res.status(500).json({ error: { message: 'Server error.' }})
    }
  })
  .delete(async (req, res) => {
    try {
      await User.remove(req.params.id)
      res.sendStatus(200)
    } catch (err) {
      res.status(500).json({ error: { message: 'Server error.' }})
    }
  })

// GET,POST /users/:id/posts
router.route('/:id/posts')
  .get(async (req, res) => {
    try {
      let user = await User.getById(req.params.id)

      if (user) {
        let posts = await Post.get()
        res.status(200).json(posts)
      }
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error.' }})
    }
  })
  .post(async (req, res) => {
    try {
      let user = await User.getById(req.params.id)

      if (user) {
        if (!req.body) {
          res.status(400).json({ error: { message: 'Missing form data.' }})
        }
        if (!req.body.text) {
          res.status(400).json({ error: { message: 'Missing text value.' }})
        }

        let post = await Post.insert({ user_id: req.params.id, text: req.body.text })
        res.status(201).json(post)
      }
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error.' }})
    }
  })

/**
 * Export router
 */

module.exports = router
