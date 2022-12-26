const User = require('../models/user.model')

const mailer = require('../mailer')
const createUser = (req, res) => {
	const { username, password, email } = req.body;
	console.log(username, password, email)
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
	const { code, id } = req.query;
	console.log('code :', code, "id:", id)

	// await User.forge({ id }).fetch().then(d => console.log(d))
	await new User({ id }).fetch().then(data => {
		if (data.get('code') == code) {
			return changeVerified(id, res)
		}
		res.redirect('/')
	})
}


const changeVerified = (id, res) => {
	new User({ id }).save({ verified: true }, { patch: true })
		.then(d => {
			console.log(d)
			res.redirect(`/api/protected?id=${id}`)
		}).catch(e => {
			console.log(e)
			res.send(e)
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
	const { id } = req.query;
	res.send(`hello ${id}`)
}

module.exports = { createUser, verifyUser, userArea };
