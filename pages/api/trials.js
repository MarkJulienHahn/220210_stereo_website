const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {

  const body = JSON.parse(req.body);

  const message = `
    Thank you for your interest in our Trials, ${body.name}\r\n
    Download Here!`;

  console.log(message)

  const data = {
    to: body.email,
    bcc: 'trials@stereotypefaces.com',
    from: { 
      email: 'trials@stereotypefaces.com', 
      name: 'Stereo Typefaces',
    },
    // templateId: 'd-9eff645d58bd4cdb8d1448651eb8772a',
    subject: `Thank you for your interest in our Trials, ${body.name}`,
    text: message,
  }


 return mail
  .send(data)
  .then((response) => console.log("Email sent..."))
  .catch((error) => console.log(error.message));
  res.status(200).json({ status: 'Ok' });
}  