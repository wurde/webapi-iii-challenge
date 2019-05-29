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

router.route('/')
  .get('/', async (req, res) => {
    try {
      let users = await User.get()
      res.status(200).json(users)
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error during users fetch.' }})
    }
  })
  .post('/', async (req, res) => {
    res.sendStatus(200)
  })

router.route('/:id/posts')
  .get(async (req, res) => {
    res.sendStatus(200)
  })
  .post(async (req, res) => {
    res.sendStatus(200)
  })

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
