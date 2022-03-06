const knex = require('../knexfile')['development'] 
const db   = require('knex')(knex) 

module.exports = db