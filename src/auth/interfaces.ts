import { Request } from 'express'

interface MUser {
	id: number,
	username: string,
	email: string,
	password: string,
	code: number,
	verified: boolean
}

interface UUser {
	id?: number,
	username?: string,
	email?: string,
	password?: string,
	code?: number,
	verified?: boolean
}


interface MRequest extends Request {
	data: {
		username: string;
	}
}

interface Data {
	data: {
		username: string;
	}
}






type CUser = Pick<MUser, 'username' | 'email' | 'password'>
type VUser = Pick<MUser, 'code' | 'id'>

export { MUser, CUser, VUser, UUser, MRequest, Data }
