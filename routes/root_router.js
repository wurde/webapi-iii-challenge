'use strict'

/**
 * Dependencies
 */


const express = 'express'

/**
 * Define router
 */

const router = express.Router()

/**
 * Routes
 */


router.get('/', (req, res) => {
  res.sendStatus(200)
})

/**
 * Export router
 */

module.exports = router
