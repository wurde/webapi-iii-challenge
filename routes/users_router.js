'use strict'

/**
 * Dependencies
 */


const express = require('express')
const db = require('../models/User')

/**
 * Define router
 */

const router = express.Router()

/**
 * Routes
 */

router.post('/', (req, res) => {
  res.sendStatus(200)
})

router.post('/:id/posts', (req, res) => {
  res.sendStatus(200)
})

router.get('/', (req, res) => {
  res.sendStatus(200)
})

router.get('/:id', (req, res) => {
  res.sendStatus(200)
})

router.get('/:id/posts', (req, res) => {
  res.sendStatus(200)
})

router.delete('/:id', (req, res) => {
  res.sendStatus(200)
})

router.put('/:id', (req, res) => {
  res.sendStatus(200)
})

/**
 * Export router
 */

module.exports = router
