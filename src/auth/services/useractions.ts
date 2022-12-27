import { User } from '../../models/user.model';
import mailer from './mailer';
import { Userm } from '../interfaces'
const create = async (obj: Userm) => {
	const code = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
	try {
		const data = await new User({ ...obj, code, verified: false })
			.save(null, { method: 'insert' })
		const mailerres = await mailer(code, obj.email, data.id)
		console.log(mailerres)
		return mailerres;
	} catch (e) {
		return console.error(e)
	}
}


const fetch = async (obj: Userm) => {
	try {
		const data = await new User(obj).fetch()
		return data
	} catch (e) {
		return console.error(e)
	}

}

const update = async (obj: Userm, upd: Userm) => {
	try {
		const data = await new User(obj).save(upd, { patch: true })
		return data;
	} catch (e) {
		console.error(e)
	}
}

export { create, update, fetch }













































































