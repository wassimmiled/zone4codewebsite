const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post("/sendmail", (req, res) => {
	// consosendmaille.log("alooooo");
	console.log(req.body, "req");
	var transporter = nodemailer.createTransport({
		host: "smtp.ethereal.email",
		auth: {
			user: "raoul.west70@ethereal.email", // generated ethereal user
			pass: "sQJTSsXtrqqUP4Ac2W", // generated ethereal password
		},
		debug: true, // show debug output
		logger: true // log information in console
	});
	var mailOptions = {
		from: "noreply.zone4code@gmail.com",
		to: "raoul.west70@ethereal.email",
		subject: req.body.ValueFirstname +"/"+req.body.ValueEmail,
		text: req.body.ValueEmailContent
	};
	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
			console.log("error send", error)
			res.send("error send it")
		} else {
			console.log("Email sent: " + info.response);
			res.send("send it")
		}
	});
});
module.exports = router;





/**
 * const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

router.post("/sendmail", async(req, res) => {
	// consosendmaille.log("alooooo");
	let testAccount = await nodemailer.createTestAccount();

	// create reusable transporter object using the default SMTP transport
	let transporter = nodemailer.createTransport({
	  host: "smtp.ethereal.email",
	  port: 587,
	  secure: false, // true for 465, false for other ports
	  auth: {
		user: "sasha.denesik@ethereal.email", // generated ethereal user
		pass: "b3sRg5K6QnMarsUru8", // generated ethereal password
	  },
	});
  console.log('testAccount.user',testAccount.user)
  console.log('testAccount.pass',testAccount.pass)

	// send mail with defined transport object
	let info = await transporter.sendMail({
	  from: '"Fred Foo 👻" <foo@example.com>', // sender address
	  to: "cimomiled@gmail.com", // list of receivers
	  subject: "Hello ✔", // Subject line
	  text: "Hello world?", // plain text body
	  html: "<b>Hello world?</b>", // html body
	});
  
	console.log("Message sent: %s", info.messageId);
	// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
	// Preview only available when sending through an Ethereal account
	console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
});
module.exports = router;
 */