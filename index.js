'use strict'

/**
 * Dependencies
 */

const express = require('express')

/**
 * Constants
 */

const port = 8080

/**
 * Define app
 */

const app = express()

/**
 * Routes
 */

app.get('/', (req, res) => {
  res.sendStatus(200)
})

/**
 * Start server
 */

if (module === require.main) {
  app.listen(port, () => {
    console.log(`Express server running on ${port}`)
  })
}

/**
 * Export app
 */

module.exports = app
