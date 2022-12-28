interface Data {
	username: string;
}
declare global {
	namespace Express {
		interface Request {
			data?: Data
		}
	}
}
