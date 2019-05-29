'use strict'

/**
 * Dependencies
 */

const db = require('../db/dbConfig.js')

/**
 * Define queries
 */

function get() {
  return db('posts')
}

function getById(id) {
  return db('posts')
    .where({ id })
    .first()
}

function insert(post) {
  return db('posts')
    .insert(post)
    .then(ids => {
      return getById(ids[0])
    })
}

function update(id, changes) {
  return db('posts')
    .where({ id })
    .update(changes)
}

function remove(id) {
  return db('posts')
    .where('id', id)
    .del()
}

/**
 * Export queries
 */

module.exports = {
  get,
  getById,
  insert,
  update,
  remove,
}
