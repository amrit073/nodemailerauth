interface Userm {
	id: number,
	username: string,
	email: string,
	password: string,
	code: number,
	verified: boolean
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

type CUser = Pick<Userm, 'username' | 'email' | 'password'>
type VUser = Pick<Userm, 'code' | 'id'>

export { Userm, smtpConf, CUser, VUser }
