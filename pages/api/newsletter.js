const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {

  const body = JSON.parse(req.body);

  const message = `
    Thank you for signing up to our Newsletter, ${body.name}\r\n
    Sign up to our newsletter to receive information regarding exclusive font previews, new releases, special events, and seasonal sale offers.`;

  console.log(message)

  const data = {
    to: body.email,
    from: { 
      email: 'orders@stereotypefaces.com', 
      name: 'Stereo Typefaces',
    },
    // templateId: 'd-9eff645d58bd4cdb8d1448651eb8772a',
    subject: `Thank you for signing up to our Newsletter, ${body.name}`,
    text: message,
  }


 return mail
  .send(data)
  .then((response) => console.log("Email sent..."))
  .catch((error) => console.log(error.message));
  res.status(200).json({ status: 'Ok' });
}  