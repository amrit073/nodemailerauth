import User from '../../models/user.model';


const checkIfverified = (req, res, next) => {
	var { id } = req.cookies
	if (!id) {
		id = req.query.id;
	}
	console.log('idis ', id)
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


export { checkIfverified }
