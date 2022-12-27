require('dotenv').config();
import { smtpConf } from './auth/interfaces'
const smtpConfig: smtpConf = {
	host: process.env.SMTPHOST,
	port: process.env.SMTPPORT,
	secure: false,
	auth: {
		user: process.env.SMTPUSER, // generated ethereal user
		pass: process.env.SMTPPASS  // generated ethereal password
	}
}


export { smtpConfig }



