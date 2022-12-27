const db = require('../db');
const User = db.model('user', {
	tableName: 'users'
})
export { User } 
