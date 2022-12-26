import { createTransport, getTestMessageUrl } from 'nodemailer';
import { smtpConfig } from '../../config.env';
const mailer = async (code, email, id) => {
	const Transporter = createTransport(smtpConfig);

	const mailOptions = {
		from: smtpConfig.auth.user,
		to: email, // list of receivers
		subject: 'email verification', // Subject line
		html: `<p><a href="http://localhost:3000/api/verify?code=${code}&id=${id}">click to verify </a></p>`// plain text body
	};
	// return Transporter.sendMail(mailOptions, async function(err, info) {
	// 	if (err) return console.error(err)
	// 	console.log('Message sent: %s', info.messageId);
	// 	url = nodemailer.getTestMessageUrl(info)
	// })

	try {
		const info = await Transporter.sendMail(mailOptions);
		const url = getTestMessageUrl(info);
		return url;
	} catch (e) {
		return console.error(e);
	}


}


export default mailer
