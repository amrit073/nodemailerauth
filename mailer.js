const nodemailer = require('nodemailer');
const mailer = async (code, email, id) => {

	Transporter = nodemailer.createTransport({
		host: 'smtp.ethereal.email',
		port: 587,
		secure: false, // true for 465, false for other ports
		auth: {
			user: "lenore.bashirian9@ethereal.email", // generated ethereal user
			pass: "y4BCvGtwpWCYwpgzyy"  // generated ethereal password
		}
	});

	const mailOptions = {
		from: "lenore.bashirian9@ethereal.email",
		to: email, // list of receivers
		subject: 'email verification', // Subject line
		html: `<p><a href="http://localhost:3000/api/verify?code=${code}&id=${id}">click to verify </a></p>`// plain text body
	};
	await Transporter.sendMail(mailOptions, async function(err, info) {
		if (err) return console.log(err)
		console.log('Message sent: %s', info.messageId);
		// Preview only available when sending through an Ethereal account
		console.log(nodemailer.getTestMessageUrl(info))
	})


}


module.exports = mailer
