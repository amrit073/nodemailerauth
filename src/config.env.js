require('dotenv').config();

const smtpConfig = {
	host: process.env.SMTPHOST,
	port: process.env.SMTPPORT,
	secure: false,
	auth: {
		user: process.env.SMTPUSER, // generated ethereal user
		pass: process.env.SMTPPASS  // generated ethereal password
	}
}


module.exports = { smtpConfig }



