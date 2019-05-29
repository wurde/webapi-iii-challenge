'use strict'

/**
 * Dependencies
 */


const express = require('express')

/**
 * Define router
 */

const router = express.Router()

/**
 * Routes
 */

router.route('/')
  .get(async (req, res) => {
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
