import { fetch } from '../services/useractions'
import { Request, Response, NextFunction } from 'express'
// import { MRequest } from '../interfaces'
const checkIfverified = async (req: Request, res: Response, next: NextFunction) => {
	var { id } = req.cookies
	if (!id) {
		id = req.query.id;
	}
	console.log('idis ', id)
	if (!id) {
		return res.redirect('/')
	}
	const data = await fetch(id)
	if (data.get('verified') == false) {
		return res.redirect('/')
	}
	req.data = { username: data.get('username') }
	next()
}


export { checkIfverified }
