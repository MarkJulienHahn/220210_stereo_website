import { Client } from "@sendgrid/client";
const sgMail = require("@sendgrid/mail");

sgMail.setClient(new Client());
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  const body = JSON.parse(req.body);

  const data = {
    to: body.email,
    bcc: "mail@markjulienhahn.de",
    from: {
      email: "info@stereotypefaces.com",
      name: "Stereo Typefaces",
    },
    subject: `Thank you for subscribing to our newsletter, ${body.firstName}`,
    html: "<p>Hello HTML world!</p>",
    template_id: "d-7c5123180b364b8eb7bc497fbf811fda",
    dynamic_template_data: { 
      name: body.name,
      email: body.email
    }
  };

  return sgMail
    .send(data)
    .then((response) => console.log("Email sent..."))
    .catch((error) => console.log(error.message));
  res.status(200).json({ status: "Ok" });
}

export const config = {
  api: {
    externalResolver: true,
  },
}