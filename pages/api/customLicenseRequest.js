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
      email: "info@stereotypefaces.com",
      name: "Stereo Typefaces",
    },
    subject: `Neue Custom-Anfrage von ${body.company}`,
    html: "<p>Hello HTML world!</p>",
    template_id: "d-e82fc5a6180a4eb8bdb1680ab7a4a518",
    dynamic_template_data: { 
      projectName: body.projectName,
      company: body.company,
      email: body.email,
      telephone: body.telephone,
      licenses: body.licenses,
      description: body.description,
      employees: body.employees,
      industry: body.industry,
      typefaces: body.typefaces
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
};
