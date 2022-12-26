const User = require('../../models/user.model')


const checkIfverified = (req, res, next) => {
	console.log(req.query)
	console.log(req.params)
	const { id } = req.query;
	if (!id) {
		return res.redirect('/')
	}
	new User({ id }).fetch().then(data => {
		if (data.get('verified') == false) {
			return res.redirect('/')
		}
		req.body.username = data.get('username')
		next()
	})

}


module.exports = { checkIfverified }
