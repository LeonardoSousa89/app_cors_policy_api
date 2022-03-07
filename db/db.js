const knex = require('../knexfile')['production'] 
const db   = require('knex')(knex) 

module.exports = db