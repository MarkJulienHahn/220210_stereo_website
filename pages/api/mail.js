const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {

  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.firstName} ${body.lastName}\r\n
    Adress: ${body.adress}\r\n
    Zip-Code: ${body.zip}\r\n
    City: ${body.city}\r\n
    Country: ${body.country}\r\n
    State: ${body.state}\r\n
    Items: ${body.items}\r\n
    Single Price: ${body.singlePrice}\r\n
    Total: ${body.total}\r\n
    Tax: ${body.tax}\r\n
    Link: ${body.link}\r\n
    Payment: ${body.pasmentMethod}\r\n
    Invoice-Number: ${body.id}
  `;

  console.log(message)

  const data = {
    to: body.email,
    from: { 
      email: 'orders@stereotypefaces.com', 
      name: 'Stereo Typefaces',
    },
    // templateId: 'd-9eff645d58bd4cdb8d1448651eb8772a',
    subject: `Thank you for your Order, ${body.firstName}`,
    text: message,
  }

  // mail.send(data)

 return mail
  .send(data)
  .then((response) => console.log("Email sent..."))
  .catch((error) => console.log(error.message));
  res.status(200).json({ status: 'Ok' });
}  

