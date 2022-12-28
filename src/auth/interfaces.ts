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

interface smtpConf {
	host: string | undefined,
	port: string | undefined,
	secure: boolean | undefined,

	auth: {
		user: string | undefined, // generated ethereal user
		pass: string | undefined,// generated ethereal password
	}
}

type CUser = Pick<MUser, 'username' | 'email' | 'password'>
type VUser = Pick<MUser, 'code' | 'id'>

export { MUser, smtpConf, CUser, VUser, UUser }