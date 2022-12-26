const db = require('../db');
const User = db.model('user', {
	tableName: 'users'
})
module.exports = User 
