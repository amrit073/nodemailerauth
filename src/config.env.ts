require('dotenv').config();
import SMTPTransport from 'nodemailer/lib/smtp-transport';
const smtpConfig: SMTPTransport.Options = {

	host: process.env.SMTPHOST,
	port: Number(process.env.SMTPPORT),
	secure: false,
	auth: {
		user: process.env.SMTPUSER,
		pass: process.env.SMTPPASS
	}

}
console.log(smtpConfig)


export { smtpConfig }



