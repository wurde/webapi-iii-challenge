'use strict'

/**
 * Dependencies
 */


const express = require('express')
const User = require('../models/User')

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
    res.sendStatus(200)
  })
  .put(async (req, res) => {
    res.sendStatus(200)
  })
  .delete(async (req, res) => {
    res.sendStatus(200)
  })

// GET,POST /users/:id/posts
router.route('/:id/posts')
  .get(async (req, res) => {
    res.sendStatus(200)
  })
  .post(async (req, res) => {
    res.sendStatus(200)
  })

/**
 * Export router
 */

module.exports = router
