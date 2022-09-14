const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

const PORT = process.env.PORT ?? 3001;

app.post('/send_mail', cors(), async (req, res) => {
	let { name, mail, phone, message } = req.body;
	const transport = nodemailer.createTransport({
		host: 'smtp.office365.com',
		port: 587,
		auth: {
			user: 'smf.doo@outlook.com',
			pass: 'Drljacasmf1!'
		}
	});

	await transport.sendMail({
		from: 'smf.doo@outlook.com',
		to: 'smf.doo@outlook.com',
		subject: 'E-mail sa veb sajta.',
		html: `<div className="email" style="
        padding: 20px;
        font-family: sans-serif;
        line-height: 2;
        font-size: 24px;
        ">
        <h2>Kontakt poruka sa Vaseg veb sajta!</h2>
        <p><b>Ime:</b> ${name}</br> <b>E-mail:</b> ${mail}</br> <b>Broj telefona:</b> ${phone}</br> <b>Poruka:</b> ${message}</p>
         </div>
    `
	});
});

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});
