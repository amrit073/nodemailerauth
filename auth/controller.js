const User = require('../models/user.model')

const mailer = require('../mailer')
const createUser = async (req, res) => {
	const { username, password, email } = req.body;
	const code = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
	new User({ username, password, email, verified: false, code })
		.save(null, { method: 'insert' })
		.then(async data => {
			console.log(data)
			await mailer(code, email, data.id)
			res.send(`please check your email for verification`)
		}).catch(e => {
			console.error(e);
			res.send(e);
		})
}

const verifyUser = async (req, res) => {
	const { code, id } = req.params;

	// await User.forge({ id }).fetch().then(d => console.log(d))
	// await new User({ id }).fetch().then(data => console.log(data)) // this also not working
	await new User.where({ id }).fetch().then(data => { // this also not working
		if (data.toJSON().code == code) {
			//	
		}
	})
}

// new User({})
// 	.where({ username: username })
// 	.save({ verified: true }, { patch: true })
// 	.then(_d => {
// 		res.redirect(`/protected?user=${username}`)
// 	}).catch(err => console.log(err))
// } else {
// 	res.redirect('/')

const userArea = (req, res) => {
	const { username } = req.body;
	res.send(`hello ${username}`)
}

module.exports = { createUser, verifyUser, userArea };
