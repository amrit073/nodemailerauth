import { update, create, fetch } from './services/useractions';
/** @type {import("express").RequestHandler} */
import { Request, Response } from 'express'
import { CUser, VUser } from './interfaces'

const createUser = async (req: Request, res: Response) => {
	const obj: CUser = req.body;
	try {
		const url = await create(obj)
		res.send(`please check you email for verification link , link to email: <a href="${url}">link</a>`)
	} catch (e) {
		res.status(500).send(e)
	}
}


const verifyUser = async (req: Request, res: Response) => {
	const obj: VUser = { id: Number(req.query.id), code: Number(req.query.code) }
	// const obj: VUser = { id: parseInt(req.query?.id), code: parseInt(req.query?.code) }
	console.log(obj)
	try {
		const data = await fetch(obj.id)
		if (data.toJSON().code == obj.code) {
			const updatedData = await update(obj.id, { verified: true })
			res.cookie('id', updatedData.get('id'));
			return res.redirect(`/api/protected`)
		}
		return res.send('please sign up')
	} catch (e) {
		res.status(500).send(e)
	}
}

// new User({})
// 	.where({ username: username })
// 	.save({ verified: true }, { patch: true })
// 	.then(_d => {
// 		res.redirect(`/protected?user=${username}`)
// 	}).catch(err => console.log(err))
// } else {
// 	res.redirect('/')

// const userArea = (req: MRequest, res: Response) => {
// 	const { id } = req.cookies;
// 	const { username } = req.data;
// 	res.send(`hello ${username} with id ${id}`)
// }

const userArea = (req: Request, res: Response) => {
	const { id } = req.cookies;
	const username = req.data?.username;
	res.send(`hello ${username} with id ${id}`)
}




export { createUser, verifyUser, userArea };
