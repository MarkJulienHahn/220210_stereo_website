import { Client } from "@sendgrid/client";
const sgMail = require("@sendgrid/mail");

sgMail.setClient(new Client());
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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
    Discount: ${body.discount}\r\n
    Total: ${body.total}\r\n
    Tax: ${body.tax}\r\n
    Link: ${body.link}\r\n
    Payment: ${body.pasmentMethod}\r\n
    Invoice-Number: ${body.id}
  `;

  const data = {
    to: body.email,
    from: {
      email: "orders@stereotypefaces.com",
      name: "Stereo Typefaces",
    },
    subject: `Thank you for your Order, ${body.firstName}`,
    text: message,
    html: "<p>Hello HTML world!</p>",
    template_id: "d-481ad35bffc74473a0ce7d72772a16b7",
    dynamic_template_data: { 
      firstName: body.firstName,
      lastName: body.lastName,
      adress: body.adress,
      zip: body.zip,
      city: body.city,
      line_items: body.line_items,
      items: body.items,
      total: body.total,
      tax: body.tax,
      link: body.link,
      id: body.id,
      licensing: body.licensing
    }
  };

  console.log(data);

  return sgMail
    .send(data)
    .then((response) => console.log("Email sent..."))
    .catch((error) => console.log(error.message));
  res.status(200).json({ status: "Ok" });
}
