// interface Data {
// 	username: string;
// }
//
//
//not working
export { }
declare global {
	namespace Express {
		export interface Request {
			data?: {
				username: string;
			}
		}
	}
}

// declare namespace Express {
// 	export interface Request {
// 		data?: {
// 			username: string;
// 		}
// 	}
// }
//

