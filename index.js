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
 * Middleware
 */

app.use(require('./middleware/logger'))

/**
 * Routes
 */

app.use('/', require('./routes/root_router'))
app.use('/users', require('./routes/users_router'))
app.use('/posts', require('./routes/posts_router'))

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
