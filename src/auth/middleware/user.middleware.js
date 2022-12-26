import User from '../../models/user.model';


const checkIfverified = (req, res, next) => {
	const { id } = req.cookies;
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
