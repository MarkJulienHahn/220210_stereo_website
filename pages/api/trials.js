import { Client } from "@sendgrid/client";
const sgMail = require("@sendgrid/mail"); 

sgMail.setClient(new Client());
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  const body = JSON.parse(req.body);

  const data = {
    to: body.email,
    bcc: 'info@stereotypefaces.com',
    from: { 
      email: 'info@stereotypefaces.com', 
      name: 'Stereo Typefaces',
    },
    subject: `Thank you for your interest in our Trials, ${body.name}`,
    html: "<p>Hello HTML world!</p>",
    templateId: 'd-c5803f0a0f374180895bfba07b42747e',
    dynamic_template_data: { 
      name: body.name,
      email: body.email
    }
  }


 return sgMail
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