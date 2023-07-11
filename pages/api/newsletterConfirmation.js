const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {

  const body = JSON.parse(req.body);

  const message = `
   ${body.name} hat sich mit der Mailadresse: ${body.email} für unseren Newsletter angemeldet`;

  console.log(message)

  const data = {
    to: 'info@stereotypefaces.com',
    from: { 
      email: 'info@stereotypefaces.com', 
      name: 'Stereo Typefaces',
    },
    subject: `Neue Newsletteranmeldung von ${body.name}`,
    text: message,
  }


 return mail
  .send(data)
  .then((response) => console.log("Email sent..."))
  .catch((error) => console.log(error.message));
  res.status(200).json({ status: 'Ok' });
}  

export const config = {
  api: {
    externalResolver: true,
  },
}