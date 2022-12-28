// interface Data {
// 	username: string;
// }
//
//
//not working
// declare global {
// 	namespace Express {
// 		interface Request {
// 			data?: {
// 				username: string;
// 			}
// 		}
// 	}
// }

declare namespace Express {
	export interface Request {
		data?: {
			username: string;
		}
	}
}


