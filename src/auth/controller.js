import f from './services/useractions';
const { update, create, fetch } = f;


const createUser = async (req, res) => {
	const { username, password, email } = req.body;
	const url = await create({ username, password, email })
	res.send(`please check you email for verification link , link to email: <a href="${url}">link</a>`)
}


const verifyUser = async (req, res) => {
	const { code, id } = req.query;
	const data = await fetch({ id })
	if (data.toJSON().code == code) {
		const updatedData = await update({ id }, { verified: true })
		res.cookie('id', updatedData.get('id'));
		return res.redirect(`/api/protected`)
	}
	return res.send('please sign up')
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
	const { id } = req.cookies;
	const { username } = req.body;
	res.send(`hello ${username} with id ${id}`)
}

export { createUser, verifyUser, userArea };
