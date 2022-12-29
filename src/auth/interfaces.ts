interface User {
	id: number,
	username: string,
	email: string,
	password: string,
	code: number,
	verified: boolean
}

type Bridge<T> = {
	[Pro in keyof T]+?: T[Pro];
}

type UUser = Bridge<User>;
type CUser = Pick<User, 'username' | 'email' | 'password'>
type VUser = Pick<User, 'code' | 'id'>

export { CUser, VUser, UUser }
