import { createTransport, getTestMessageUrl, TransportOptions } from 'nodemailer';
import { MailOptions } from 'nodemailer/lib/ses-transport';
import { smtpConfig } from '../../config.env';
const mailer = async (code: number, email: string, id: number) => {
	const Transporter = createTransport(smtpConfig)
	const mailOptions: MailOptions = {
		from: smtpConfig?.auth?.user,
		to: email, // list of receivers
		subject: 'email verification', // Subject line
		html: `<p><a href="http://localhost:3001/api/verify?code=${code}&id=${id}">click to verify </a></p>`// plain text body
	};
	// return Transporter.sendMail(mailOptions, async function(err, info) {
	// 	if (err) return console.error(err)
	// 	console.log('Message sent: %s', info.messageId);
	// 	url = nodemailer.getTestMessageUrl(info)
	// })

	try {
		const info = await Transporter.sendMail(mailOptions);
		const url = getTestMessageUrl(info);
		console.log(url)
		return url;
	} catch (e) {
		console.error(e)
		return console.error(e);
	}


}


export default mailer
