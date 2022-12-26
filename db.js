const knexfile = require('./knexfile').development
const knex = require('knex')(knexfile)
const db = require('bookshelf')(knex)
module.exports = db; 
